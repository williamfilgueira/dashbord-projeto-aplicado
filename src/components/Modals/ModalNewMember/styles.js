import styled from "styled-components";

const FormAddMember = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 220px;
  justify-content: space-between;
  margin-top: 20px;
`;

const ContainerSelect = styled.section`
  width: 100%;
  @media screen and (max-width: 600px) {
    width: 90%;
    margin-bottom: 10px;
  }
`;

export { FormAddMember, ContainerSelect };
