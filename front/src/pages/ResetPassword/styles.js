import styled from "styled-components";

import theme from "../../global/theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContainerImage = styled.div`
  display: flex;
  background-color: black;
  width: 600px;
  img {
    width: 600px;
    height: 100vh;
  }
  `;
export const ContainerResetPassword = styled.div`
display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  width: 550px;
  height: 50vh;
  margin-top: 100px;
  margin-left: 100px;
  h3 {
    /* margin-top: 80px;
    margin-bottom: 80px; */
    margin-top: 20px;
    font-size: 15px;
    font-weight: 100;
    color: ${theme.colors.alterdataBlue};
    font-family: ${theme.fonts.paragraph};
  }
  
  `;
export const Button = styled.button`
  background-color: red;
  height: 40px;
  width: 330px;
  color: white;
  font-size: large;
  font-family: ${theme.fonts.title};
  border-radius: 10px;
  background-color: ${theme.colors.alterdataBlue};
  transition: 0.3s;
  :hover{
    color:${theme.colors.alterdataBlue};
    background-color: white;
    cursor: pointer;
  }
`
