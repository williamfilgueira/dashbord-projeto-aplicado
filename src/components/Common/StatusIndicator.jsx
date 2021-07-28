import React from 'react';
import styled from "styled-components";
import theme from '../../global/theme';
import Workout from "../../assets/emoji/Workout.png";

export default function StatusIndicator({color}) {
    return (
        <> 
          <Icon src={Workout} />
          <Status color={color} >hora do café</Status> 
        </>
    )
};

const Status = styled.p`
  font-family: ${theme.fonts.paragraph};
  font-size: 1rem;
  color: ${props => props.color === 'white' ? '#FFF' : '#000'}
`;

const Icon = styled.img`
  margin-right: 9px;
`;
