import React, { useState } from 'react'
import Edit from '../pages/Edit'
import MyArticles from '../pages/MyArticles'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import App from '../App'
import Read from '../pages/Read'
import Write from '../pages/Write'

const Routes = () => {
    const [token,setToken] = useState(localStorage.getItem("token"))
    const authenticatedRoutes = [
        {
            path:'/edit',
            element:<Edit/>
        },
        {
            path:'/my-articles',
            element:<MyArticles/>
        }
    ]
    const publicRoutes = [
        {
            path:"/*",
            element:<Navigate to={'/'}/>
        },
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:"/read",
                    element:<Read/>
                },
                {
                    path:'/edit',
                    element:<Edit/>
                },
                {
                    path:'/write',
                    element:<Write/>
                },

                ...authenticatedRoutes
            ]
        },
        
    ]
    
    const unAuthRoutes = [
        {
          path: "/login",
          element: <Login/>,
        },
        {
            path: "/signup",
            element: <Signup/>,
        },
    ]
    

    const enabledRoutes = [
        ...publicRoutes,
        ...unAuthRoutes
    ]
    const router = createBrowserRouter(enabledRoutes)
  return (
    <RouterProvider router = {router}/>
  )
}

export default Routes