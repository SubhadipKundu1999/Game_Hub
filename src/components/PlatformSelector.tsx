import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'

import { AiOutlineCaretDown } from 'react-icons/ai'
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/usePlatforms';
import {FcCheckmark} from 'react-icons/fc'
interface Props{
  onSelectPlatform: (platform: Platform) => void,
  selectedPlatform:Platform  | null
}

function PlatformSelector({onSelectPlatform, selectedPlatform }:Props) {

  console.log(selectedPlatform);

  const {data, error} = usePlatforms(selectedPlatform);

  if(error) return null;

  return (
    <Box marginBottom={'20px'}>
    <Menu >
        <MenuButton as={Button} rightIcon={<AiOutlineCaretDown/>}>
            {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
<MenuList>
  {data?.map((platform)=> <MenuItem key={platform.id} onClick={()=> onSelectPlatform(platform)}> <HStack><Text>{platform.name}</Text>{platform.id===selectedPlatform?.id?<FcCheckmark  fontSize={'20px'}/>:''}</HStack></MenuItem>)}

</MenuList>
    </Menu>
    </Box>
  )
}

export default PlatformSelector