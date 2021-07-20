import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.gray};
  height: 120px;
  width: auto;
  border-radius: 20px;
  margin-top: 35px;
  margin-right: 10%;
  margin-left: 10%;
`;

const InfoContainer = styled.div`
  margin-left: 13px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-family: ${theme.fonts.title};
  margin-bottom: 5px;
  font-size: 1.37rem;
`;

const Username = styled.p`
  font-family: ${theme.fonts.paragraph};
`;

const StatusContainer = styled.div`
  display: flex;
  margin-top: 19px;
`;
const Status = styled.p`
  font-family: ${theme.fonts.paragraph};
  font-size: 1rem;
`;

const Icon = styled.img`
  margin-right: 9px;
`;

const Function = styled.p`
  margin-left: auto;
  padding-top: 20px;
  padding-right: 35px;
  font-family: ${theme.fonts.paragraph};
`;

export { Container };
export { InfoContainer };
export { Name };
export { Function };
export { Username };
export { StatusContainer };
export { Icon };
export { Status };
