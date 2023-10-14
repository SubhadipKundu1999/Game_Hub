import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery
}

function GameHeading({gameQuery}:Props) {
    const heading = (gameQuery.platform?gameQuery.platform?.name:'') + (" ")+ (gameQuery.genre?gameQuery.genre?.name:'');
  return (

           <Heading marginBottom={'20px'} fontSize={'5xl'}> {heading} Games</Heading>

  )
}

export default GameHeading
