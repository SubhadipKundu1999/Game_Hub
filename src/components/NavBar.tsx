import React from 'react'
import {Flex, HStack, Image, Input, Text} from '@chakra-ui/react'
import logo from "../assets/logo.png"
import ColorModeSwitcher from './ColorModeSwitcher'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'

function NavBar() {

  return (
<Flex
 p={'5'}
  justifyContent={'space-between'} 
  gap={'20px'} 
  >  

<HStack>
<Link to="/">
  <Image 
src={logo} 
alt="Logo"
boxSize='50px'
borderRadius='10'
/>
</Link>
<Link to="/"><Text  whiteSpace={'nowrap'} fontSize='xl' fontWeight='bold' display={{ lg:'block', md:'none', sm:'none', base:'none'}}> GAME HUB</Text></Link>
  </HStack>
  <HStack flex={1}>
  <SearchBox/>
  </HStack>
<HStack>
<ColorModeSwitcher/>
</HStack>

</Flex>
  )
}

export default NavBar
