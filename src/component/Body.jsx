import React from 'react'
import Header from './Header'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'

const Body = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element:<Login/>
      },
      {
        path: "/browse",
        element:<Browse/>
      }
    ]);
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Header />
      <Browse /> */}
    </div>
  );
}

export default Body