import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AiOutlineCaretDown } from 'react-icons/ai'

interface Props{
    onSelectSortOrder:(sortOrder:string)=>void;
    sortOrder:string
}

function SortSelector({onSelectSortOrder, sortOrder}:Props) {

const sortOrders=[
    {value:'', label:'Relevance'},
    {value:'-addded', label:'Date added'},
    {value:'name', label:'name'},
    {value:'-released', label:'Relese Date'},
    {value:'-metacritic', label:'Popularity'},
    {value:'-rating', label:'Average rating'}
]
const currentSortedOrder= sortOrders.find((order)=> order.value===sortOrder);


  return (
    <Box marginBottom={'20px'}>
    <Menu >
        <MenuButton as={Button} rightIcon={<AiOutlineCaretDown/>}>
           Order By: {currentSortedOrder?.label}
        </MenuButton>
<MenuList>
    {sortOrders.map((order)=><MenuItem key={order.value} onClick={()=>onSelectSortOrder(order.value)}>{order.label}</MenuItem>)}
 

</MenuList>
    </Menu>
    </Box>
  )
}

export default SortSelector
