import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url'

interface Props{

  onSelectGenre: (genre:Genre)=> void ,
  selectedGenre: Genre | null;

}


function GenresList({onSelectGenre, selectedGenre}:Props) {

    const {data, error, isLoading} = useGenres();

  return (
    <>
    <Heading marginBottom={'20px'} fontSize={'3xl'}> Genres</Heading>
    {isLoading? <Spinner
  thickness='2px'
  speed='0.65s'
  emptyColor='gray.200'
  color='black'
  size='xl'
/>: ''}
<List spacing={'10px'}>
    {
    data.map((genre)=> <ListItem key={genre.id} >
         <HStack>
      <Image src={getCroppedImageUrl (genre.image_background)} boxSize={genre.id === selectedGenre?.id?'45px': '42px'} borderRadius={'5'}/>
      <Button  fontWeight={genre.id === selectedGenre?.id?'extrabold':'normal' }  fontSize={'xl'}  variant={'link'} onClick = {()=>onSelectGenre(genre)}  >{genre.name}</Button>
    </HStack>
      </ListItem>)}
</List>

</>
  )
}

export default GenresList
