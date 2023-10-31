

import { Box,  SimpleGrid, Spinner} from "@chakra-ui/react";
import InfiniteScroll from 'react-infinite-scroll-component';

import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import useGameQueryStore from "../strores/gameQueryStore";

const Skeleton= [1,2,3,4,5,6,7,8];


function GameGrid() {

  const gameQuery = useGameQueryStore(store=> store.gameQuery)

const {data, error,isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} = useGames(gameQuery);

if(error){

  return(
  <Box>
  <h1 style={{color:'red'}}>{error.message}</h1>
  </Box>
  )
  }

const fetchedGameCount = data?.pages.reduce((total, page)=> total+ page.results.length,0) || 0


  return (
<InfiniteScroll
dataLength={fetchedGameCount}
hasMore={!!hasNextPage}
next={()=>fetchNextPage()}
loader={
<Spinner/>
}
>

<SimpleGrid columns ={{sm:1, md:2, lg:3}}
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
</InfiniteScroll>


      

  )
}

export default GameGrid
