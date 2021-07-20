import React from 'react'

import {Container} from './styles'

import Topbar from "../../components/Topbar"
import Sidebar from '../../components/Sidebar'

export default function Dashboard() {
    return (
        <Container>
            <Topbar />
            <Sidebar />
        </Container> 
    )
}
