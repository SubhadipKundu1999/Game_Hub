import React from 'react'
import useScreenshots from '../hooks/useScreenShots'
import { GridItem, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import noImage from "../assets/no-image.png"
 interface Props{
  gameId:number
 }
function GameScreenshots({gameId}:Props) {

 const{ data, error} = useScreenshots(gameId);

 if(data?.results.length===0)  return (

 <img src={noImage} />
 )

  return (
  
    <>
 <Heading marginTop={'5'}>Screenshots </Heading>
 
<SimpleGrid columns={{base:1, md:2}} spacing={4} marginTop={4}>
  {data?.results.map((screenShot)=>
    <Image key={screenShot.id} src={screenShot.image}   borderRadius={2}/>

  )}


</SimpleGrid>

</>

  )
}

export default GameScreenshots
