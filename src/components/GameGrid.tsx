

import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";

function GameGrid() {
const {games, error} = useGames();

  return (

<SimpleGrid columns ={
  {sm:1, md:2, lg:3}}
 spacing={10}
 padding={'40px'}

>
{games.map((game)=> <GameCard key={game.id} game={game}></GameCard>)
      }
</SimpleGrid>

      

  )
}

export default GameGrid
