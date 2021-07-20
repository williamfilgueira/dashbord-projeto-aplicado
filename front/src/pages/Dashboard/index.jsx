import React from 'react'

import {Container} from './styles'
import {Link} from 'react-router-dom';

import Topbar from "../../components/Topbar"
import Sidebar from '../../components/Sidebar'

export default function Dashboard() {
    return (
        <Container>
            <Topbar />
            <Sidebar />
            <Link to="Login"><h1>Login</h1></Link>
        </Container> 
    )
}
