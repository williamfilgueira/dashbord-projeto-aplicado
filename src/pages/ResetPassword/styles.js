import styled from "styled-components";

import theme from "../../global/theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  > img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }
`;

export const ContainerResetPassword = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 100%;

  background-color: #fff;

  @media screen and (max-width: 600px) {
    flex: 1;
  }
  h2 {
    font-size: 15px;
    font-weight: 300;
    color: ${theme.colors.darkerGray};
    font-family: ${theme.fonts.paragraph};
    margin-bottom: 20px;
  }
  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 300;
    color: ${theme.colors.darkerGray};
    font-family: ${theme.fonts.paragraph};
  }
`;

export const ContainerImage = styled.div`
    /* display: flex; */

    img{
      margin-top: 50px;
      width: 130px;

    }
`



export const Button = styled.button`
  background-color: red;
  height: 40px;
  width: 330px;
  color: white;
  font-size: large;
  font-family: ${theme.fonts.title};
  border-radius: 10px;
  border: none;
  background-color: ${theme.colors.alterdataBlue};
  transition: 0.3s;
  :hover {
    color: ${theme.colors.alterdataBlue};
    border: 1px solid silver;
    background-color: white;
    cursor: pointer;
  }
`;

export const  ContainerInput = styled.div`
  margin: 10px 0 10px 0;
  @media screen and (max-width: 600px) {
  width: 324px;
  
  }
`
