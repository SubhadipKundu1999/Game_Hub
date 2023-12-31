import React from 'react'
import useGenres from '../hooks/useGenres'
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url'
import useGameQueryStore from '../strores/gameQueryStore';



function GenresList() {
  
  const selectGernre = useGameQueryStore(store=> store.selectGenre)
  const selectedgernre = useGameQueryStore(store=> store.gameQuery.genre)

    const {data, error, isLoading} = useGenres();
    if(error){
      console.log(error);
      return(
      <>
      <h1 style={{color:'red'}}>{error.message}</h1>
      </>
      )
    }

  return (
    <>
    <Heading marginBottom={'20px'} fontSize={'3xl'}> Genres</Heading>
    {isLoading || error? <Spinner
  thickness='2px'
  speed='0.65s'
  emptyColor='gray.200'
  color='black'
  size='xl'
/>: ''}
<List spacing={'10px'}>
    {
    data?.results?.map((genre)=> <ListItem key={genre.id} >
         <HStack>
      <Image src={getCroppedImageUrl (genre.image_background)} objectFit={'cover'} boxSize={genre.id === selectedgernre ?'45px': '42px'} borderRadius={'5'}/>
      <Button  textAlign={'left'} fontWeight={genre.id === selectedgernre ?'extrabold':'normal' } whiteSpace='normal'  fontSize={'xl'}  variant={'link'} onClick = {()=>selectGernre(genre.id)} >{genre.name}</Button>
    </HStack>
      </ListItem>)}
</List>

</>
  )
}

export default GenresList
