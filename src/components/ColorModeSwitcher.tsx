import {HStack, Switch, useColorMode} from '@chakra-ui/react'

function ColorModeSwitcher() {

    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
        <Switch onChange={toggleColorMode} isChecked={colorMode==='dark'} t/>
    </HStack>
  )
}

export default ColorModeSwitcher
