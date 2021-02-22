import styled from "styled-components";

export const FifthSection = styled.section`
  display: flex;
  width: 100%;
  height: 250px;
  padding: 0 40px;
  margin: 90px 0;

  justify-content: center;
  align-items: center;
`;

export const FifthSectDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
  align-items: center;
  height: 250px;
  z-index: 1;

  h1 {
    font-size: 35px;
    margin: 30px;
    font-family: 'Poppins',sans-serif;
    font-weight: 700;
  }

  @media screen and (max-width: 740px) {
    h1 {
      text-align: center;
    }
  }

  @media screen and (max-width: 530px) {
    h1 {
      font-size: 25px;
      margin: 10px !important;
    }
  }
`;
