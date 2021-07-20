import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.alterdataBlue};
  margin-top: -100px;
  padding-top: 40px;
  width: 280px;
  height: 100%;
`

const GroupList = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  padding-top: 70px;
`

const GroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  margin-bottom: 24px;
`

const GroupName = styled.span`
  font-family: ${theme.fonts.paragraph};
  font-size: 20px;
  color: #fff;
  display:flex;
`

export {Container, GroupList,GroupContainer, GroupName}