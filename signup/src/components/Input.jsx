import React from "react";
import styled from "styled-components";

const Input = ({ placeholder, type }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder}
        type={type ? type : "text"}
        required
        autoComplete="off"
      />
      <Status />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  padding: 0 1rem;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background-color: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:focus + & {
    background-color: #ffa689;
  }

  ${StyledInput}:invalid + & {
    background-color: #fe2f75;
  }

  ${StyledInput}:valid + & {
    background-color: #70edb5;
  }
`;

export default Input;
