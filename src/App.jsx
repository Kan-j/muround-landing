import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing'
import HomeLayout from './pages/HomeLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,

    children: [
      {
        index: true,
        element: <Landing/>,

      }, 
     
    ]
  },

])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App
