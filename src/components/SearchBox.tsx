import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import React, { useRef } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import useGameQueryStore from '../strores/gameQueryStore';
import { useNavigate } from 'react-router-dom';



function SearchBox() {

  const searchGame = useGameQueryStore(store=> store.searchGame)
const navigate= useNavigate()
 const ref = useRef<HTMLInputElement>(null);
  return (
    <form style={{width:'100%'}} onSubmit={(event)=>{
navigate("/")
      event.preventDefault();
      if(ref.current) searchGame(ref.current.value)
    }}>
<InputGroup variant='filled'>
    <InputLeftElement pointerEvents='none' >
    <AiOutlineSearch  size={20}/>
  </InputLeftElement>
  <Input type='search'  
   placeholder='Search'
   ref={ref}
borderRadius={'20px'}

 
  
      
       />
</InputGroup>

    </form>

  )
}

export default SearchBox
