import React from 'react'

import {Container} from './styles'

import Topbar from "../../components/Topbar";
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

export default function Dashboard() {
    return (
        <Container>
            <Topbar />
            <Card />
            {/* <Sidebar /> */}
        </Container> 
    )
}
