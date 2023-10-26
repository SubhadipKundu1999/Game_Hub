import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import usePlatforms from '../hooks/usePlatforms'
import useGenres from '../hooks/useGenres'
interface Props{
    gameQuery: GameQuery
}

function GameHeading({gameQuery}:Props) {

const {data:platforms, error:platforms_error} =usePlatforms()

const {data:genres, error:genres_error} =useGenres()
const  sel_platform = (platforms?.results?.find((element)=> element.id===gameQuery.platform))
const  sel_genre = (genres?.results?.find((element)=> element.id===gameQuery.genre))

    const heading = (sel_platform? sel_platform.name:'') + (" ")+ (sel_genre?  sel_genre.name:'');
  return (

           <Heading marginBottom={'20px'} fontSize={'5xl'}> {heading} Games</Heading>
          // <></>

  )
}

export default GameHeading
