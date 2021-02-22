import styled from "styled-components";

const Button = styled.button`
    width: 300px;
    height: 55px;

    background-color: hsl(322, 100%, 66%);
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    border: 1px solid hsl(322, 100%, 66%);
    border-radius: 50px;
    outline: none;

    :hover {
      background-color: white;
      color: hsl(322, 100%, 66%);
      transition: 0.2s;
    }

    @media screen and (max-width: 600px) {
      width: 200px;
      height: 45px;
    }
`;

export default Button;
