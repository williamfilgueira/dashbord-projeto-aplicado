import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../global/theme";
import Workout from "../../assets/emoji/Workout.png";
import { getAllStatus } from "../../api/api.status";

export default function StatusIndicator({ color }) {
  
  const [statusId , setStatusId] = useState('0');
  const [status, setStatus] = useState([]); 

  useEffect(() => {
  getAllStatus().then((res) => setStatus(res.data));
}, [])

const handleSelect = (event) =>{
  setStatusId(event.target.value)
} 

  return (
    <>
      <Select 
      color={color}
      value={statusId}
      onChange={handleSelect}>
        {/* <Option>{"\u{1f3dd}\u{fe0f}"} Férias</Option>
        <Option>{"\u{2615}"} Café</Option> */}
        {status.map((item) =>  <Option
        key={item.id}
        value={item.nome}
         >{item.emoji} {item.nome}</Option>)}
      </Select>
    </>
  );
}

const Status = styled.p`
  font-family: ${theme.fonts.paragraph};
  font-size: 1rem;
  color: ${(props) => (props.color === "white" ? "#FFF" : "#000")};
`;

const Icon = styled.img`
  margin-right: 9px;
`;

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
`;

const Option = styled.option`
  color: ${(props) => (props.color === "white" ? "#fff" : "#000")};
  font-family: ${theme.fonts.paragraph};
`;
