import React from 'react'
import {Flex, HStack, Image, Input, Text} from '@chakra-ui/react'
import logo from "../assets/logo.png"
import ColorModeSwitcher from './ColorModeSwitcher'
import SearchBox from './SearchBox'

function NavBar() {

  return (
<Flex p={'4'} justifyContent={'space-between'} gap={'20px'}>  
<HStack>
  <Image 
src={logo} 
alt="Logo"
boxSize='50px'
borderRadius='10'
/>
<Text  whiteSpace={'nowrap'} fontSize='xl' fontWeight='bold' display={{ lg:'block', md:'none', sm:'none', base:'none'}}> GAME HUB</Text>

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
