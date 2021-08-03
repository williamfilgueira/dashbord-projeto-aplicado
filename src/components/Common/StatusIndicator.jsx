import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../global/theme";
import { getAllStatus } from "../../api/api.status";
import { modifyUserStatus } from "../../api/api.user";

export default function StatusIndicator({
  color,
  title,
  username,
  getSetUsers,
}) {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getAllStatus().then((res) => setStatus(res.data));
  }, []);

  function handleSelect(status, username) {
    modifyUserStatus(status, username)
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
      .finally(() => {
        getSetUsers();
      });
  }

  return (
    <>
      <Select
        color={color}
        value={title}
        onChange={(e) => handleSelect(e.target.value, username)}
      >
        {status.map((item) => (
          <Option key={item.id} value={item.nome}>
            {item.emoji} {item.nome}
          </Option>
        ))}
      </Select>
    </>
  );
}

const Select = styled.select`
  color: ${(props) => (props.color === "white" ? "#fff" : "#000")};
  background: ${(props) =>
    props.color === "white"
      ? theme.colors.alterdataBlue
      : theme.colors.lightGray};
  width: 150px;
  height: 28px;
  border: 1px solid ${(props) => (props.color === "white" ? "#fff" : "#555555")};
  border-radius: 8px;
  font-family: ${theme.fonts.paragraph};
  font-size: 14px;

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 12px;
    width: 120px;
  }

  :focus {
    outline: none;
  }
`;

const Option = styled.option`
  font-family: ${theme.fonts.paragraph};
`;
