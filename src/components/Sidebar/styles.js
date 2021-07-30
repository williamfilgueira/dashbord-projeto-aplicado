import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  transform: ${(props) => {
    if (!props.isOpen && !props.isDesktop) {
      return "translate(-100%, 0)";
    }
  }};
  position: ${(props) => {
    if (!props.isOpen && !props.isDesktop) {
      return "absolute";
    }
  }};
  width: ${(props) => {
    if (!props.isDesktop) {
      return "100vw";
    } else {
      return "340px";
    }
  }};
  transition: all ease-in-out 0.5s;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.alterdataBlue};

  height: 100vh;
`;

const GroupList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0 30px;
`;

const MenuToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;
  padding: 0 30px 0 30px;
`;

const MenuToggle = styled.div`
  padding: 10px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.isActive && theme.colors.alterdataSecondaryBlue};
  cursor: pointer;
`;
const UserToggle = styled.div`
  padding: 10px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.activeMenu === "user" && theme.colors.alterdataSecondaryBlue};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RoleToggle = styled.div`
  padding: 10px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.activeMenu === "role" && theme.colors.alterdataSecondaryBlue};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StatusToggle = styled.div`
  padding: 10px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.activeMenu === "status" && theme.colors.alterdataSecondaryBlue};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TeamToggle = styled.div`
  padding: 10px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.activeMenu === "team" && theme.colors.alterdataSecondaryBlue};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToggleDescription = styled.span`
  font-family: ${theme.fonts.paragraph};
  color: #fff;
  margin-top: 5px;
  font-size: 13px;
`;

export {
  Container,
  GroupList,
  MenuToggleContainer,
  UserToggle,
  RoleToggle,
  StatusToggle,
  TeamToggle,
  ToggleDescription,
};
