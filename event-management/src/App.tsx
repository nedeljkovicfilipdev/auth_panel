import { useState } from 'react'
import './App.css'
import { Button } from 'flowbite-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();

  const handleHomepage = () => {
    navigate("/home")
  }

  const handleAdminUI = () => {
    navigate('/login')
  }

  return (
    <>
    <div className='flex items-center justify-center h-[calc(100vh-74px)] rounded-md p-8 space-x-12'>
      <Card className='grid h-[300px] w-[300px]'>
        <CardHeader>
          <CardTitle>Client UI</CardTitle>
          <CardDescription>Home</CardDescription>
        </CardHeader>
        <CardContent className="text-xl font-semibold tracking-tight">
          <p>Explore all the places in Belgrade for unforgettable experience</p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleHomepage}>Explore</Button>
        </CardFooter>
      </Card>
      <Card className='grid h-[300px] w-[300px]'>
        <CardHeader>
          <CardTitle>Admin UI</CardTitle>
          <CardDescription>Login Panel</CardDescription>
        </CardHeader>
        <CardContent className="text-xl font-semibold tracking-tight">
          <p>Modify everything to make your place stand out</p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAdminUI}>Login</Button>
        </CardFooter>
      </Card>
      </div>
    </>
  )
}

export default App
