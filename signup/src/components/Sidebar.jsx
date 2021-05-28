import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Input from "./Input";

const SideBar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={Logo} alt="" />
        <h3>
          C17AN <span>Code</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>회원 가입</h3>
        <Input placeholder="이름을 입력하세요" />
        <Input type="email" placeholder="이메일을 입력하세요" />
        <Input type="password" placeholder="비밀번호를 입력하세요" />
        <Input type="password" placeholder="비밀번호를 확인해 주세요" />
        <button>회원가입</button>
      </Form>
      <div>
        <Terms>회원가입 시, 개인정보 동의 및 서비스 약관에 동의합니다.</Terms>
        <h4>
          이미 계정이 있으신가요? <span>로그인</span>하세요.
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb5;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    text-align: center;
    color: #ff8d8d;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 2rem;

  h4 {
    margin-top: 1rem;
    color: #808080;
    font-weight: 400;
    font-size: 13px;
    text-align: center;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
`;

export default SideBar;
