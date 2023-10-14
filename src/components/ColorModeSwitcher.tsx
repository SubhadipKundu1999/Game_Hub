import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react'

function ColorModeSwitcher() {

    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
        <Switch onChange={toggleColorMode} isChecked={colorMode==='dark'} />
        <Text whiteSpace={'nowrap'}  display={{ lg:'block', md:'none', sm:'none'}}> Color Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitcher
