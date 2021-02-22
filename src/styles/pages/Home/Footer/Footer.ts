import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 60px 0;

  justify-content: center;
  align-items: center;

  background-color: hsl(192, 100%, 9%);
  color: white;
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 60%;

  justify-content: space-between;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;

  justify-content: center;

  div + div {
    margin: 15px 0;
  }

  div:nth-child(2) {
    width: 300px;
  }

  div:nth-child(3) {
    display: flex;

    p {
      margin-left: 20px;
      font-family: "Open Sans", sans-serif;
    }

    @media screen and (max-width: 950px) {
      p {
        font-size: 16px;
      }
    }
  }
  div:nth-child(4) {
    display: flex;

    p {
      margin-left: 20px;
      font-family: "Open Sans", sans-serif;
    }
  }

  div:nth-child(5) {
    display: flex;
    width: 100px;
    justify-content: space-between;

    svg {
      fill: white;
    }
  }

  @media screen and (max-width: 680px) {
    order: 2;
    width: 100%;
    margin: 80px 15px 15px 15px;
  }
`;

export const FooterNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  justify-content: center;

  h2 {
    margin: 10px 0;
  }

  #p-id {
    width: 300px;

    p {
      margin: 10px 0;
      font-family: "Open Sans", sans-serif;
    }
  }

  #Input-button-id {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 35px;

    input {
      width: 300px;
      outline: none;
    }

    button {
      width: 150px;
      height: 40px;

      color: white;
      font-family: "Poppins", sans-serif;
      background-color: hsl(322, 100%, 66%);

      border: 1px solid hsl(322, 100%, 66%);
      border-radius: 6px; 
      outline: none;

      cursor: pointer;

      :hover {
        background-color: hsla(322, 100%, 66%, 0.91);
        transition: 0.2s;
      }
    }

    @media screen and (max-width: 1010px) {
      button {
        width: 100px;
        height: 40px;
      }
    }

    @media screen and (max-width: 900px) {
      input {
        width: 230px;
      }
    }

    @media screen and (max-width: 754px) {
      input {
        width: 200px;
      }
    }

    @media screen and (max-width: 680px) {
      flex-direction: column;
      order: 1;

      input {
        width: 100%;
        height: 50px;
      }

      button {
        width: 50%;
        height: 50px;
        margin-top: 15px;
        float: right;
      }
    }
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    margin: 15px;
  }
`;
