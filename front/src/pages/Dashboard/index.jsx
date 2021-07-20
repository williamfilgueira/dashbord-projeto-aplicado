import React from 'react'

import {Container} from './styles'

import Topbar from "../../components/Topbar"
import Sidebar from '../../components/Sidebar'
import Chatbar from '../../components/Chatbar'

export default function Dashboard() {
    return (
        <Container>
            <Sidebar />
            <Topbar />
            <Chatbar />
        </Container> 
    )
}
