import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 230px;

  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    height: 120px;
  }
`;

export const HeadeWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 60%;

  justify-content: space-between;

  @media screen and (max-width: 600px) {
    div {
      div {
        width: 140px;
      }
    }
  }
`;

export const ButtonHeader = styled.button`
  height: 35px;
  width: 130px;

  background-color: white;
  color: hsl(322, 100%, 66%);
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;

  border-radius: 50px;
  outline: none;
  border: 1px solid hsl(322, 100%, 66%);

  cursor: pointer;

  :hover {
    background-color: hsl(322, 100%, 66%);
    color: white;
    transition: 0.2s;
  }

  @media screen and (max-width: 600px) {
    height: 30px;
    width: 90px;
  }
`;
