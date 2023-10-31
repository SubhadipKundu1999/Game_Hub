import { Box, Card, CardBody,  HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformList from "./PlatformList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import CardContainer from "./CardContainer"
import Emoji from "./Emoji"
import { Link } from "react-router-dom"

interface Props{
  game: Game
}

function GameCard({game}:Props) {
  return (
    <Box _hover={{
      transform: 'scale(1.03)',
      transition:'transform .15s ease-in'
    }}
  >
   <CardContainer>
<Card borderRadius={'10px'} overflow={'hidden'}>
    <Image src={getCroppedImageUrl(game.background_image)} w={'100%'} />
   
    <CardBody>

      <HStack justifyContent={'space-between'} marginY={'10px'}>

      <PlatformList platforms= {game.parent_platforms.map(p=>p.platform)} />
      <CriticScore criticScore= {game.metacritic}/>

      </HStack>
      <Heading  marginTop={'30px'} fontSize={'2xl'}>
        <Link to={`/games/${game.slug}`}> {game.name} </Link>
      <Emoji rating={game.rating_top}/>
      </Heading>
      
    </CardBody>

    </Card>
   </CardContainer>

   </Box>
  )
}
 
export default GameCard
