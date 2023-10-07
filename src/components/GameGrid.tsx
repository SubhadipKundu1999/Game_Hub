

import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

const Skeleton= [1,2,3,4,5,6,7,8];
interface Props{
  selectedGenre: Genre | null;
}

function GameGrid({selectedGenre}:Props) {
const {data, error,isLoading} = useGames(selectedGenre);

  return (

<SimpleGrid columns ={
  {sm:1, md:2, lg:3}}
 spacing={5}
 padding={'40px'}

>
  {isLoading ?
  (<>{Skeleton.map(s=> <GameCardSkeleton key={s} /> )}</>) :''}
{data.map((game)=> <GameCard key={game.id} game={game}></GameCard>)
      }
</SimpleGrid>

      

  )
}

export default GameGrid
