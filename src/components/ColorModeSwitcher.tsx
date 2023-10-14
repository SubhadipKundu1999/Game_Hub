import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react'

function ColorModeSwitcher() {

    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
        <Switch onChange={toggleColorMode} isChecked={colorMode==='dark'} />
        <Text whiteSpace={'nowrap'} > Color Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitcher
