import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import WriteComment from "./WriteComment";
import SubmitButton from "./SubmitButton";
import UserInfo from "./UserInfo";
import {
  CommentState,
  commentState,
} from "../../../../atoms/pageAtoms/community/commentState";

interface CommentFormProps {
  initialCommentState?: CommentState;
}

const Form = styled.form`
  width: 100%;
  height: 175px;
  background: #ffffff;
  border: 1px solid #f5edde;
  border-radius: 16px;
  padding: 32px 30px 24px 40px;
  display: flex;
  flex-direction: column;
`;

const CommentForm = ({ initialCommentState }: CommentFormProps) => {
  const setComment = useSetRecoilState(commentState);
  useEffect(() => {
    if (initialCommentState) {
      setComment(initialCommentState);
    }
  }, []);
  return (
    <Form>
      <UserInfo />
      <WriteComment initialComment={initialCommentState?.comment} />
      <SubmitButton />
    </Form>
  );
};

export default CommentForm;

CommentForm.defaultProps = {
  initialCommentState: undefined,
};
