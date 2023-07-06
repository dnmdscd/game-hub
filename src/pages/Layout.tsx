import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Layout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default Layout