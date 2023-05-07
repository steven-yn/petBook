import HospitalContainer from "@containers/map/HospitalContainer";
import MapContainer from "@containers/map/MapContainer";
import { removeScrollPosition } from "@lib/modules/localStorage";
import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import {
  HOSPITAL_DETAIL,
  HOSPITAL_LIST,
  HOSPITAL_REVIEW_LIST,
} from "@lib/resources/hospitalResource";
import commonServerSideProps from "@lib/server/commonServerSideProps";
import { GetServerSideProps } from "next";
import { NextPageWithOptions } from "@lib/queries";

const HospitalMapGlobalStyle = createGlobalStyle`
  #__next {
    display: grid;
    grid-template-rows: 164px auto;
    grid-template-columns: auto 370px;

    min-width: 100%;
    height: 100vh;
    overflow-y: hidden;
  }

  .Top__Nav__Wrap {
    grid-column-start: 1;
    grid-column-end: 3;
  }

`;

const HospitalMap: NextPageWithOptions = () => {
  useEffect(() => {
    return () => {
      removeScrollPosition();
    };
  }, []);
  return (
    <>
      <HospitalMapGlobalStyle />
      <MapContainer />
      <HospitalContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = commonServerSideProps([
  HOSPITAL_LIST,
  HOSPITAL_DETAIL,
  HOSPITAL_REVIEW_LIST,
]);

export default HospitalMap;
