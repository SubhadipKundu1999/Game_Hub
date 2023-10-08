

import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

const Skeleton= [1,2,3,4,5,6,7,8];

interface Props{
  selectedGenre: Genre | null,
  selectedPlatform :Platform | null

}

function GameGrid({selectedGenre, selectedPlatform}:Props) {

const {data, error,isLoading} = useGames(selectedGenre,selectedPlatform);

  return (

<SimpleGrid columns ={
  {sm:1, md:2, lg:3}}
 spacing={5}


>
  {isLoading ?
  (<>{Skeleton.map(s=> <GameCardSkeleton key={s} /> )}</>) :''}
{data.map((game)=> <GameCard key={game.id} game={game}></GameCard>)
      }
</SimpleGrid>

      

  )
}

export default GameGrid
