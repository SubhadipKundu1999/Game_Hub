import React from 'react'
import useGameTrailers from '../hooks/useGameTrailers'
import { Box } from '@chakra-ui/react';


interface Props{
    gameId:number
}
function GameTailer({gameId}:Props) {
   const {data, error} = useGameTrailers(gameId);
  const video = data?.results[0];


if(!video) return null;

  return (
   <Box>
  <video controls
   src={`${video.data[480]}`}
  poster={video.preview}
  width={'100%'}
  autoPlay
muted
/>


   </Box>
  )
}

export default GameTailer
