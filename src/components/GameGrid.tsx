

import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const Skeleton= [1,2,3,4,5,6,7,8];

function GameGrid() {
const {games, error,isLoading} = useGames();

  return (

<SimpleGrid columns ={
  {sm:1, md:2, lg:3}}
 spacing={10}
 padding={'40px'}

>
  {isLoading ?
  (<>{Skeleton.map(s=> <GameCardSkeleton key={s} /> )}</>) :''}
{games.map((game)=> <GameCard key={game.id} game={game}></GameCard>)
      }
</SimpleGrid>

      

  )
}

export default GameGrid
