import styled from "styled-components";

export const SecondSection = styled.section`
  display: flex;
  width: 100%;
  height: 250px;
  padding: 0 40px;
  margin: 90px 0;

  background-color: hsl(207, 100%, 98%);

  justify-content: center;
  align-items: center;

  @media screen and (max-width: 690px) {
    height: 500px;
  }

  @media screen and (max-width: 500px) {
    height: 550px;
  }
`;

export const SecondSectDiv = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
  justify-content: space-between;
  z-index: 1;

  .div-growtogether {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;

    h2 {
      font-weight: 700;
      font-size: 30px;
      font-family: 'Poppins', sans-serif;
      margin-bottom: 15px;
    }

    p {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      
    }

    @media screen and (max-width: 900px) {
      max-width: 300px;

      h2 {
        font-size: 25px;
      }

      p {
        font-size: 16px;
      }
    }

    @media screen and (max-width: 800px) {
      h2 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }

    @media screen and (max-width: 690px) {
      order: 2;

      h2 {
        font-size: 25px;
        text-align: center;
      }

      p {
        font-size: 16px;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

export const SecondSectDivImage = styled.div`
  @media screen and (max-width: 690px) {
    order: 1;
    margin: 0 auto 60px auto;
  }
`;
