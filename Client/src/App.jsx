/* eslint-disable no-unused-vars */
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';


const router = createBrowserRouter([
  {
      path: '/',
      element: (
          <Link to="Home"></Link>
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
},

{
  path: '/dashboard',
  element: (
      <Link to="Dashboard">Dashboard</Link>
  )
}
])

const App = () => {
  
  return (
    <>
    <Header/>
    <RouterProvider router={router} />
    {/* <Footer/> */}
    </>
    )
  }

export default App;