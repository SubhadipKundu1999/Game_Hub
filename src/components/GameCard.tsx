import { Card, CardBody, CardFooter, CardHeader, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformList from "./PlatformList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import CardContainer from "./CardContainer"

interface Props{
  game: Game
}

function GameCard({game}:Props) {
  return (
   <CardContainer>
<Card>
    <Image src={getCroppedImageUrl(game.background_image)} w={'100%'} />
   
    <CardBody>

      <Heading fontSize={'2xl'}>{game.name}</Heading>

      <HStack justifyContent={'space-between'} marginY={'10px'}>

      <PlatformList platforms= {game.parent_platforms.map(p=>p.platform)} />
      <CriticScore criticScore= {game.metacritic}/>

      </HStack>

    </CardBody>

    </Card>
   </CardContainer>
  )
}
 
export default GameCard
