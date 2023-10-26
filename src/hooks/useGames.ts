import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, {fetchData }  from '../api-client';
import { Platform } from './usePlatforms';

const apiClient = new APIClient<Game>("/games")
 export interface  Game{
    name: string,
    id: number,
    background_image: String
    parent_platforms: {platform:Platform}[],
    metacritic:number,
    rating_top:number,
    page:number
}
const useGames=(gameQuery:GameQuery)=>

useInfiniteQuery<fetchData<Game>, Error>({

   queryKey:['games',gameQuery],

   queryFn: ({pageParam=1})=>
     apiClient.getAll({

      params:
      {
       genres:gameQuery.genre?.id,
       parent_platforms:gameQuery.platform?.id,
       ordering:gameQuery.sortOrder,
       search:gameQuery.searchText,
       page:pageParam
      }
   }),
   getNextPageParam:(lastPage, allPages)=>{

       return lastPage.next? allPages.length+1: undefined
   },
   staleTime:24*60*60*10009

})

export default useGames;