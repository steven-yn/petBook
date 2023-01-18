import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import Image from "next/image";

// custom
import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
import { registerRequest } from "@lib/API/petBookAPI";
import { registerFormState } from "@atoms/pageAtoms/login/userState";
import navigator from "@lib/modules/navigator";

import RegisterInputBox from "@components/register/RegisterInputBox";
import PasswordInput from "@components/register/RegisterPasswordFrom";
import RegisterNameForm from "@components/register/RegisterNameForm";
import { Modal } from "@components/common/modal/Modal";

// type
import { ErrorResponse } from "@lib/API/petBookAPI/types/userRequest";

// styled
import {
  Main,
  Terms,
  RegisterFormWrap,
  SpaceTopWrap,
  RegisterInfoText,
} from "./styled/styledRegisterForm";

// reponse 정의
const REGISTER_CREATE = createRequest({
  key: ["REGISTER_CREATE"],
  requester: registerRequest.register,
});
export const REGISTER_CHECK_EMAIL = createRequest({
  key: ["REGISTER_CHECK_EMAIL"],
  requester: registerRequest.registerCheckEmail,
});
export const REGISTER_CHECK_NICKNAME = {
  key: ["REGISTER_CHECK_NICKNAME"],
  requester: registerRequest.registerCheckNickname,
};

const Register = () => {
  // const setRegisterForm = useSetRecoilState(registerFormState);
  return (
    <div>
      <RegisterFormWrap>
        <div className="Login_Title">
          <Image
            src="/img/common/logo/logo.svg"
            alt="Picture of the author"
            width={160}
            height={27}
          />
        </div>
        <div>
          <RegisterInputBox
            IconType="Login"
            axiosValue="email"
            current="이메일을 입력해주세요"
          />
          {/* <RegisterInputBox
            IconType="Login_Passcode_Disabled"
            axiosValue="email_num"
            current="인증번호 4자리"
          /> */}
          <RegisterInfoText state={false}>
            <p>인증이 완료되었습니다</p>
          </RegisterInfoText>
        </div>
        <SpaceTopWrap>
          <PasswordInput />
        </SpaceTopWrap>
        <SpaceTopWrap>
          <RegisterNameForm />
        </SpaceTopWrap>
        <RegisterContainer.TermsWrap />
        <RegisterContainer.RegisterButton />
      </RegisterFormWrap>
    </div>
  );
};

const TermsWrap = () => {
  const [modal, setModal] = useState(false);
  const handleCloseModal = () => {
    setModal(false);
  };
  const HandlerOpen = () => {
    setModal(true);
  };

  return (
    <Terms>
      <Modal state={modal} handleCloseModal={handleCloseModal} />
      <li>
        <button type="button" onClick={HandlerOpen}>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" />
            <p>펫북 이용 약관에 동의합니다 [필수]</p>
          </label>
        </button>
      </li>
      <li>
        <button type="button" onClick={HandlerOpen}>
          <label htmlFor="privacy">
            <input type="checkbox" id="privacy" />
            <p>개인정보 수집 및 이용에 동의합니다 [필수]</p>
          </label>
        </button>
      </li>
    </Terms>
  );
};

const RegisterButton = () => {
  const registerForm = useRecoilValue(registerFormState);
  const { data, isSuccess, isError, error, mutate } =
    useSetResource(REGISTER_CREATE);
  const Sign = () => {
    mutate(registerForm);
  };

  useEffect(() => {
    if (isSuccess) {
      navigator({ url: "/login" });
    }
    if (isError) {
      const errorObj = error as ErrorResponse;
      alert(errorObj.response.data.message);
    }
  }, [isError, data]);

  return (
    <button type="button" onClick={Sign} className="Primary">
      회원가입
    </button>
  );
};

const RegisterContainer = () => {
  return (
    <Main>
      <RegisterContainer.Register />
    </Main>
  );
};

RegisterContainer.Register = Register;
RegisterContainer.TermsWrap = TermsWrap;
RegisterContainer.RegisterButton = RegisterButton;

export default RegisterContainer;
