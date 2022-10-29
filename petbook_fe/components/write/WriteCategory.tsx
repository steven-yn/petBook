import { CategoryListResponse } from "@lib/API/petBookAPI/types/categoryRequestSpr";
import navigator from "@lib/modules/navigator";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useState } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import writeState from "../../atoms/pageAtoms/community/writeState";
import {
  ListDiv,
  WriteCategoryButtonBox,
  WriteCategorySection,
} from "./styled/styledWriteCategory";

const WriteCategory = () => {
  console.log("Category render");

  return (
    <WriteCategorySection>
      <p className="Category__Section__Title">카테고리를 선택해주세요</p>
      <WriteCategory.List Button={WriteCategory.Item} />
    </WriteCategorySection>
  );
};

interface ListProps {
  Button: React.MemoExoticComponent<(props: ItemProps) => JSX.Element>;
}

const List = ({ Button }: ListProps) => {
  const router = useRouter();
  const setWrite = useSetRecoilState(writeState);
  const { data } =
    useQuery<AxiosResponse<CategoryListResponse>>("CATEGORY_LIST");
  const categoryList = data?.data as CategoryListResponse;

  const [selected, setSelected] = useState(
    router?.query.page
      ? categoryList[Number(router?.query.page) - 1].name
      : categoryList[0].name
  );

  const onClick: MouseEventHandler = (e) => {
    const value = e.currentTarget.childNodes[0].textContent;
    const resultValue = value || categoryList[categoryList.length - 1].name;

    navigator(
      `/community/write?page=${
        categoryList.findIndex((elem) => elem.name === resultValue) + 1
      }`,
      undefined,
      { shallow: true }
    );

    setSelected(resultValue);
    setWrite((write) => ({
      ...write,
      selectedCategory: resultValue,
    }));
  };

  return (
    <ListDiv className="Category__Keyword__List">
      {categoryList.map((keyword, idx) => (
        <Button
          key={keyword.name}
          keyword={keyword.name}
          selected={selected}
          onClick={onClick}
        />
      ))}
    </ListDiv>
  );
};

interface ItemProps {
  keyword: string;
  selected: string;
  onClick: MouseEventHandler;
}

const Item = React.memo(({ keyword, selected, onClick }: ItemProps) => (
  <WriteCategoryButtonBox
    selected={selected}
    keyword={keyword}
    onClick={onClick}
  >
    {keyword}
  </WriteCategoryButtonBox>
));

WriteCategory.List = List;
WriteCategory.Item = Item;

export default React.memo(WriteCategory);
