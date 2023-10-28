import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import useGameQueryStore from '../strores/gameQueryStore';



function SortSelector() {

  const selectedSortOrder = useGameQueryStore(store=> store.gameQuery.sortOrder)
  const selectSortOrder = useGameQueryStore(store=> store.selectSortOrder)


const sortOrders=[
    {value:'', label:'Relevance'},
    {value:'-addded', label:'Date added'},
    {value:'name', label:'name'},
    {value:'-released', label:'Relese Date'},
    {value:'-metacritic', label:'Popularity'},
    {value:'-rating', label:'Average rating'}
]
const currentSortedOrder= sortOrders.find((order)=> order.value=== selectedSortOrder);


  return (
    <Box marginBottom={'20px'}>
    <Menu >
        <MenuButton as={Button} rightIcon={<AiOutlineCaretDown/>}>
           Order By: {currentSortedOrder?.label}
        </MenuButton>
<MenuList>
    {sortOrders.map((order)=><MenuItem key={order.value} onClick={()=>selectSortOrder(order.value)}>{order.label}</MenuItem>)}
 

</MenuList>
    </Menu>
    </Box>
  )
}

export default SortSelector
