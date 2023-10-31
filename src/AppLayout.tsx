import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

function AppLayout() {
  return (
    <Box display={'flex'}
     flexDirection={'column'}
     w={'100%'}>
        <NavBar/>
        <Outlet/>
    </Box>

    
  )
}

export default AppLayout
