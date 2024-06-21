import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Loging from './Loging'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
    const appRoter =  createBrowserRouter([
        {
            path:"/",
            element: <Loging/>
        },
        {
            path:"/browse",
            element: <Browse/>
        }

    ])
  return (
    <div>
        <RouterProvider router={appRoter}/> 
    </div>
  )
}

export default Body
