import { useState } from 'react'
import './App.css'
import Register from './Component/register'
import Login from './Component/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Register />
  }
  
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
