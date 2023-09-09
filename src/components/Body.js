import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const Body = () => {
  const appRouter=createBrowserRouter([
  //   {
  //   path:"/", // error router inside the router
  //   element:<Body/>
  // },
  {
    path:"/browse",
    element:<Browse/>
  },{
    path:"/",
    element:<Login/>
  }])
  return (
    <div>
    <RouterProvider router={appRouter}/>   
    </div>
  )
}

export default Body
