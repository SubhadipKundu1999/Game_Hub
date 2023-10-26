import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'

import { AiOutlineCaretDown } from 'react-icons/ai'
import usePlatforms from '../hooks/usePlatforms';

import {FcCheckmark} from 'react-icons/fc'
interface Props{
  onSelectPlatform: (platform: number) => void,
  selectedPlatformId?: number
}

function PlatformSelector({onSelectPlatform, selectedPlatformId: selectedPlatform }:Props) {
const {data, error} = usePlatforms();
  console.log(data);
 const  sel_platform = (data?.results?.find((element)=> element.id===selectedPlatform))

  if(error) return null;

  return (
    <Box marginBottom={'20px'}>
    <Menu >
        <MenuButton as={Button} rightIcon={<AiOutlineCaretDown/>}>

{sel_platform?.name || 'Platforms'}

        </MenuButton>
<MenuList>
  {/* <MenuItem  onClick={()=>onSelectPlatform(null)} color={'red'}> clear</MenuItem> */}
  {data?.results?.map((platform)=>
   <MenuItem key={platform.id} onClick={()=> onSelectPlatform(platform.id)}>
     <HStack>
      <Text>{platform.name}</Text>{platform.id === selectedPlatform ? <FcCheckmark  fontSize={'20px'}/>:''}
     </HStack>
     </MenuItem>)}

</MenuList>
    </Menu>
    </Box>
  )
}

export default PlatformSelector
