import React from 'react';
import styled from "styled-components";
import theme from '../../global/theme';

import Beer from "../../assets/emoji/Beer.png";
import Coding from "../../assets/emoji/Coding.png";
import Coffee from "../../assets/emoji/Coffee.png";
import Meeting from "../../assets/emoji/Meeting.png";
import Rice from "../../assets/emoji/Rice.png";
import Sick from "../../assets/emoji/Sick.png";
import Sleeping from "../../assets/emoji/Sleeping.png";
import Traffic from "../../assets/emoji/Traffic.png";
import Workout from "../../assets/emoji/Workout.png";

export default function StatusIndicator() {
    return (
        <> 
          <Icon src={Workout} />
          <Status>hora do café</Status>
        </>
    )
};

const Status = styled.p`
  font-family: ${theme.fonts.paragraph};
  font-size: 1rem;
`;

const Icon = styled.img`
  margin-right: 9px;
`;
