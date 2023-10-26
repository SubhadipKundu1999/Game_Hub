

import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

import { GameQuery } from "../App";
import React from "react";

const Skeleton= [1,2,3,4,5,6,7,8];

interface Props{
  gameQuery:GameQuery
}


function GameGrid({gameQuery}:Props) {

const {data, error,isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} = useGames(gameQuery);

if(error){
  console.log(error);
  return(
  <Box>
  <h1 style={{color:'red'}}>{error.message}</h1>
  </Box>
  )
}


  return (

 <Box >


<SimpleGrid columns ={
  {sm:1, md:2, lg:3}}
 spacing={5}
 marginBottom={10}
>
  {isLoading || error?
  (<>{Skeleton.map(s=> <GameCardSkeleton key={s} /> )}</>) :''}

{data?.pages.map((page,pageIndex)=>
(
  <React.Fragment key={pageIndex}>
    {
      page.results.map((game)=> <GameCard key={game.id} game={game}></GameCard>)
    }

  </React.Fragment>

)
)
}
  
</SimpleGrid>

<Button onClick={()=>fetchNextPage()}
disabled={!hasNextPage || isFetchingNextPage}>
  {
    isFetchingNextPage? "Loading.."
    : hasNextPage?"Load more"
    :"Noting more to Load"
  }
</Button>


</Box>   
      

  )
}

export default GameGrid
