import React from 'react'
import { Navigate } from 'react-router'
import { Login } from '../login/Login'
import { Layout } from './Layout'


const AuthRoutes = {
    path: "/",
    element: <Layout/>,
    children:
    [
        {path: "login", element: <Login />},
        { path: "/", element: <Navigate to="login" /> },
    ]

  
}

export default AuthRoutes






        
        
