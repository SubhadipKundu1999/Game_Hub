import { Heading } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'

function GameHeading() {
const  sel_platform = usePlatform()

const  sel_genre = useGenre()

    const heading = (sel_platform? sel_platform.name:'') + (" ")+ (sel_genre?  sel_genre.name:'');
    return (

           <Heading marginBottom={'20px'} fontSize={'5xl'}> {heading} Games</Heading>

  )
}

export default GameHeading
