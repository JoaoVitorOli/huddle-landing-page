import styled from "styled-components";

export const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  height: auto;
  padding: 0 40px;
  margin-bottom: 150px;

  justify-content: center;
  align-items: center;

  @media screen and (max-width: 530px) {
    padding: 0 25px !important;
    margin-bottom: 60px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 0;

  h1 {
    font-size: 35px;
    margin: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

  div {
    margin-bottom: 40px;
    max-width: 450px;
    text-align: center;

    p {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
    }
  }

  @media screen and (max-width: 530px) {
    h1 {
      font-size: 25px;
      margin: 10px !important;
    }

    p {
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;

export const Mid = styled.div`
  height: auto;

  svg {
    width: auto;
    height: auto;
    size: auto;
  }
`;

export const Bottom = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
  
  div {
    display: flex;
    flex-direction: column;
    margin: 0 10px;

    span {
      font-size: 60px;
      font-weight: 700;
      margin: 10px 0;
    }

    p {
      font-family: 'Open Sans', sans-serif;
      color: gray;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column !important;
    align-items: center;

    div + div {
      margin-top: 60px;
    }
  }
`;