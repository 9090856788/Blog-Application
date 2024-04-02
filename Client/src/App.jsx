/* eslint-disable no-unused-vars */
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
      path: '/',
      element: (
          <Link to="Home">Home</Link>
      )
  },

  {
    path: '/about',
    element: (
        <Link to="About">About Us</Link>
    )
},

{
  path: '/blogs',
  element: (
      <Link to="Blogs">Blogs</Link>
  )
},

{
  path: '/contact',
  element: (
      <Link to="Contact">Contact Us</Link>
  )
},

{
  path: '/login',
  element: (
      <Link to="Login">Login</Link>
  )
},

{
  path: '/register',
  element: (
      <Link to="Register">Register</Link>
  )
}
])

const App = () => {
  
  return (
    <>
    <RouterProvider router={router} />
    </>
    )
  }

export default App;