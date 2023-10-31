import { useInfiniteQuery, } from '@tanstack/react-query';
import APIClient, {fetchData }  from '../api-client';
import { Platform } from './usePlatforms';
import { GameQuery } from '../strores/gameQueryStore';
import { Genre } from './useGenres';
interface Devloper{
   name:string
}
const apiClient = new APIClient<Game>("/games")

 export interface  Game{
    name: string,
    slug:string,
    id: number,
    background_image: String
    parent_platforms: {platform:Platform}[],
    metacritic:number,
    rating_top:number,
    page:number,
    description_raw?: string,
    released? :string
    background_image_additional?:string
    playtime?:number
    genres?:Genre[],
    developers?: Devloper[],
    website?: string  | ''

}
const useGames=(gameQuery:GameQuery)=>

useInfiniteQuery<fetchData<Game>, Error>({

   queryKey:['games',gameQuery],

   queryFn: ({pageParam=1})=>
     apiClient.getAll({

      params:
      {
       genres:gameQuery.genre,
       parent_platforms:gameQuery.platform,
       ordering:gameQuery.sortOrder,
       search:gameQuery.searchText,
       page:pageParam,
      
      }
   }),
   getNextPageParam:(lastPage, allPages)=>{

       return lastPage.next? allPages.length+1: undefined
   },
   staleTime:24*60*60*1000

})

export default useGames;