import debounce from "@lib/modules/debounce";
import { COMMENT_CREATE_LIKE, COMMENT_DELETE_LIKE, tokenContext } from "@pages/community/list/[articleId]";
import { MutableRefObject, useContext, useRef, useState } from "react";
import { useSetResource } from "../common/useResource";

export interface updateIsLikedParams {
  commentId: number;
  isLiked: boolean;
  initialLiked: MutableRefObject<boolean>
}

function useUpdateLikeDebounce() {
  const { mutate: createLikeComment } = useSetResource(COMMENT_CREATE_LIKE);
  const { mutate: deleteLikeComment } = useSetResource(COMMENT_DELETE_LIKE);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const updateIsLiked = debounce(
    ({ commentId, isLiked, initialLiked, }: updateIsLikedParams) => {
      if (isLiked === initialLiked.current) return;
      if (!isLiked) {
        deleteLikeComment({
            pathParam: `${commentId}`
          },
          {
            onSuccess: () => { initialLiked.current = false; },
            onError: () => {
              alert("좋아요 취소에 실패했습니다. 다시 시도해주세요 😢");
            },
          }
        );
      } else {
        createLikeComment({
            pathParam: `${commentId}`,
          },
          {
            onSuccess: () => { initialLiked.current = true; },
            onError: () => {
              alert("좋아요에 실패했습니다. 다시 시도해주세요 😢");
            },
          }
        );
      }
    },
    3000,
    timeoutId
  );
  return updateIsLiked;
}

export default function useLikeDebounce({
  id,
  liked,
  likeCount
}: {
  id: number;
  liked: boolean;
  likeCount: number;
}) {
  const token = useContext(tokenContext);
  const initialLiked = useRef(liked);
  const [isLiked, setIsLiked] = useState(liked);
  const updateIsLiked = useUpdateLikeDebounce();
  const clickLikeButton = () => {
    if (token === null) {
      alert("🔒 로그인해주세요!");
      return;
    }
    updateIsLiked({ commentId: id, isLiked: !isLiked, initialLiked });
    setIsLiked((state) => !state);
  };

  return {
    isLiked,
    clickLikeButton,
    computedLikeCount: likeCount +
      (!liked && isLiked
        ? 1
        : liked && !isLiked
        ? -1
        : 0)
  };
}
