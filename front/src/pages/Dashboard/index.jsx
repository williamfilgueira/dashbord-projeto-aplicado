import React from 'react'

import {Container} from './styles'

import Topbar from "../../components/Topbar"
import Sidebar from '../../components/Sidebar'
import Chatbar from '../../components/Chatbar'
import Card from '../../components/Card';

export default function Dashboard() {
    return (
        <Container>
            <Sidebar />
                <CardSection>
                    <Topbar />
                    <Card/>
                </CardSection>
            <Chatbar />
        </Container> 
    )
}
