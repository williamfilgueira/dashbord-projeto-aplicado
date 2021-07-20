import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display:'flex';
  background-color: ${theme.colors.alterdataBlue};
  margin-top: -100px;
  width: 280px;
  height: 100%;
`

const GroupList = styled.div`
  display:'flex';
`

const GroupContainer = styled.div`
  display: 'flex';
`

const GroupName = styled.span`
  display:'flex';
`

export {Container, GroupList,GroupContainer, GroupName}