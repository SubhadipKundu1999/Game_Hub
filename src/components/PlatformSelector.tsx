import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'

import { AiOutlineCaretDown } from 'react-icons/ai'
import usePlatforms from '../hooks/usePlatforms';

import {FcCheckmark} from 'react-icons/fc'
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../strores/gameQueryStore';

function PlatformSelector() {

  const selectPlatform = useGameQueryStore(store=> store.selectPlatform)

const {data, error} = usePlatforms();

 const  sel_platform =usePlatform()

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
   <MenuItem key={platform.id} onClick={()=> selectPlatform(platform.id)}>
     <HStack>
      <Text>{platform.name}</Text>{platform.id === sel_platform?.id? <FcCheckmark  fontSize={'20px'}/>:''}
     </HStack>
     </MenuItem>)}

</MenuList>
    </Menu>
    </Box>
  )
}

export default PlatformSelector
