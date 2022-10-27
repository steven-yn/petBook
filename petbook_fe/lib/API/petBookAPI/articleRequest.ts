import RequestCore from "./RequestCore";
import { ArticleResponse, ArticleListResponse } from "./types/articleRequest";

export default class ArticleAPI extends RequestCore {
  /**
   * @param body 요청 패킷 Body 에 JSON 형태로 담을 내용입니다.
   * @param body.title 게시물의 타이틀 입니다.
   * @param body.content 게시물의 컨텐츠 입니다.
   * @param body.categoryId 게시물의 카테고리 ID 값 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @param config.headerObj 유저 토큰값을 헤더에 작성합니다. 없으면 에러가 납니다.
   * @returns 생성한 게시물 정보가 들어옵니다.
   */
  public article_create = async (
    body: {
      title: string;
      content: string;
      categoryId: number;
    },
    config?: { headerObj: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      headerObj: config && config.headerObj,
    });

    const result = await this.getResult({
      requestMethod: "POST",
      requestURL,
      requestHeaders,
      body,
    });

    return result;
  };

  /**
   *
   * @param pathParam 게시물 ID 값 입니다.
   * @param config Header 메시지를 추가할때 씁니다.
   * @returns 게시물 ID 에 해당하는 게시물을 반환합니다.
   */
  public article_item = async (
    pathParam: string,
    config?: { headerObj: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      pathParam,
      headerObj: config && config.headerObj,
    });

    const result = await this.getResult<ArticleResponse>({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };

  /**
   *
   * @param params 입력할 쿼리파라미터 입니다.
   * @param params.categoryId 해당하는 카테고리 ID 값을 number[] 형태로 명시합니다.
   * @param params.page 몇 페이지까지 불러올지 명시합니다.
   * @param params.size page 당 불러올 게시물의 갯수입니다.
   * @param config
   * @returns categoryId 에 해당하는 게시물 리스트를 반환합니다.
   */
  public article_list = async (
    params?: {
      categoryId: number[] | number | string;
      page: number;
      size: number;
    },
    config?: { headerObj: object }
  ) => {
    const { requestURL, requestHeaders } = this.getParameters({
      uri: "/list",
      params,
      headerObj: config && config.headerObj,
    });

    const result = await this.getResult<ArticleListResponse>({
      requestMethod: "GET",
      requestURL,
      requestHeaders,
    });

    return result;
  };
}
