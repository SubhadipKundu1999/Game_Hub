import { Card, CardBody, CardFooter, CardHeader, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformList from "./PlatformList"

interface Props{
  game: Game
}

function GameCard({game}:Props) {
  return (
   <Card overflow={'hidden'}>
    <Image src={game.background_image} w={'100%'} />
    <CardHeader>{game.name} </CardHeader>
    <CardBody>
  <PlatformList platforms= {game.parent_platforms.map(p=>p.platform)} />
    </CardBody>
   </Card>
  )
}
 
export default GameCard
