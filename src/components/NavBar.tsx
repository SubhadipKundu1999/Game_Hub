import React from 'react'
import {HStack, Image, Text} from '@chakra-ui/react'
import logo from "../assets/logo.png"
import ColorModeSwitcher from './ColorModeSwitcher'
function NavBar() {
  return (
<HStack p={2} justifyContent={'space-between'}>
  <HStack>
  <Image 
src={logo} 
alt="Logo"
boxSize='50px'
borderRadius='10'

/>
<Text  fontSize='xl' fontWeight='bold' > GAME HUB</Text>

  </HStack>

<ColorModeSwitcher/>
</HStack>
  )
}

export default NavBar
