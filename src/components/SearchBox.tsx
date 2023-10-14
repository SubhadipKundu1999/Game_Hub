import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import React, { useRef } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'



interface Props{
  onSearch:(searchText:string)=>void;
}
function SearchBox({onSearch}: Props) {
 const ref = useRef<HTMLInputElement>(null);
  return (
    <form style={{width:'100%'}} onSubmit={(event)=>{
      event.preventDefault();
      if(ref.current) onSearch(ref.current.value)
    }}>
<InputGroup variant='filled'>
    <InputLeftElement pointerEvents='none' >
    <AiOutlineSearch  size={20}/>
  </InputLeftElement>
  <Input type='search'  
   placeholder='Search'
   ref={ref}
borderRadius={'20px'}
backgroundColor='gray.700'
 
  
      
       />
</InputGroup>

    </form>

  )
}

export default SearchBox
