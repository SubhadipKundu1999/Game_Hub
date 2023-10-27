import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'
interface Props{
    gameQuery: GameQuery
}
function GameHeading({gameQuery}:Props) {
  
const  sel_platform = usePlatform(gameQuery.platform)

const  sel_genre = useGenre(gameQuery.genre)

    const heading = (sel_platform? sel_platform.name:'') + (" ")+ (sel_genre?  sel_genre.name:'');
    return (

           <Heading marginBottom={'20px'} fontSize={'5xl'}> {heading} Games</Heading>

  )
}

export default GameHeading
