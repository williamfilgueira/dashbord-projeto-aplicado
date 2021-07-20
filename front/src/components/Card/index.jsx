import React from 'react';
import Avatar from '../Common/Avatar'
import { Container, StatusContainer, InfoContainer, Icon, Name, Function, Status, Username} from './styles';

import avatar from '../../assets/images/Avatar.png';
import coffee from '../../assets/emoji/HotBeverage.png';
export default function Card() {
    return (
        <Container>
            <Avatar src={avatar} />
            <InfoContainer>
                    <Name>Mateus</Name>
                    <Username>
                        mateus.dsn.pack
                    </Username>
                    <StatusContainer>
                        <Icon src={coffee} />
                        <Status>hora do café</Status>
                    </StatusContainer>
            </InfoContainer>
            <Function>cargo</Function>
        </Container>
    )
};