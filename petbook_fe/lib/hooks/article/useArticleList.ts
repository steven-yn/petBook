import categoryState from "@atoms/pageAtoms/community/categoryState";
import { ARTICLE_LIST } from "@pages/community";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import { UseQueryResult } from "react-query";
import { usePage } from "./usePagination";
import useResource from "../common/useResource";

export default function useArticleList(): {
  status: UseQueryResult["status"];
  articles: ArticleResponse[];
  totalPages: number;
} {
  // params
  const size = useRef(10);
  const category = useRecoilValue(categoryState);
  const page = usePage();

  // fetch data
  const { data, status } = useResource({
    key: `${ARTICLE_LIST.key}_${page}_${category.id}`,
    fetcher: ARTICLE_LIST.fetcher,
    params: {
      categoryId: category.id === 0 ? "" : category.id,
      page: page - 1,
      size: size.current,
    },
  });

  // return data
  const articleList = {
    status,
    articles: data === undefined ? [] : data.data.articles,
    totalPages:
      data === undefined
        ? 0
        : Math.ceil(data.data.totalElements / size.current),
  };
  return articleList;
}
