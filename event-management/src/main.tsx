import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/index.tsx'
import Home from './pages/Homepage/index.tsx'

import './index.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import Login from './pages/Login/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Flowbite
      theme={{
        dark: true
      }}
    >
      <DarkThemeToggle defaultValue={''}/>
      <RouterProvider router={router}/>
    </Flowbite>
  </React.StrictMode>,
)
