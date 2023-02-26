/* global kakao */

import loadingState from "@atoms/common/loadingState";
import mapState, {
  currentRegionDataState,
} from "@atoms/pageAtoms/hospitalmap/mapState";
import { cookieRequest } from "@lib/API/petBookAPI";
import { LocationCacheData } from "@lib/API/petBookAPI/types/cookieRequest";
import getGeoLocation from "@lib/utils/getGeoLocation";
import getCoord2RegionH from "@lib/utils/kakaoMaps/getCoord2RegionH";
import localConsole from "@lib/utils/localConsole";
import { koreaGeoLocationValidate } from "@lib/utils/validation/geoLocationValidate";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const CurrentGps = () => {
  const currentRegionData = useRecoilValue(currentRegionDataState);
  const setMapState = useSetRecoilState(mapState);

  const setLoading = useSetRecoilState(loadingState);

  const onClick = async () => {
    setLoading(true);
    try {
      const { coords } = await getGeoLocation();
      const { latitude, longitude } = coords;

      if (!koreaGeoLocationValidate(latitude, longitude)) {
        throw new Error(
          `사용자의 위치(${
            process.env.TZ ? process.env.TZ : "알수없음"
          })가 서비스 가능한 지역(한국)이 아닙니다.`
        );
      }

      const regionData = await getCoord2RegionH(latitude, longitude);

      // : kakao.maps.services.RegionCode & {latitude: number, longitude : number }

      const locationData: LocationCacheData = {
        latitude,
        longitude,
        petBookRegionName:
          currentRegionData.region_2depth_name +
          " " +
          currentRegionData.region_3depth_name,
        ...regionData,
      };

      const cookieRes = await cookieRequest.setCookie({
        body: {
          key: "USER_LOCATION_DATA",
          value: locationData,
        },
      });

      localConsole?.log(cookieRes, "cookieRes");

      setMapState((state) => {
        return {
          ...state,
          currentRegionData: regionData,
          currentGeoLocation: { latitude, longitude },
        };
      });

      // const geocoder = new kakao.maps.services.Geocoder();

      // geocoder.addressSearch("서울시 강남구 역삼1동", (result, status) => {
      //   localConsole?.log(status, "status");
      //   localConsole?.log(result);
      // });

      setLoading(false);
    } catch (err) {
      localConsole?.warn(err);
      setLoading(false);
    }
  };

  return (
    <header>
      <h1>
        {currentRegionData.region_2depth_name +
          " " +
          currentRegionData.region_3depth_name}
      </h1>
      <button type="button" onClick={onClick}>
        위치수정
      </button>
    </header>
  );
};

export default CurrentGps;
