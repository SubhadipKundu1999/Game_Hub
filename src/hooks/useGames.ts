import { useQuery } from '@tanstack/react-query';
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
    rating_top:number
}
const useGames=(gameQuery:GameQuery)=>

useQuery<fetchData<Game>, Error>({

   queryKey:['games',gameQuery],

   queryFn: ()=>
     apiClient.getAll({

      params:
      {
       genres:gameQuery.genre?.id,
       parent_platforms:gameQuery.platform?.id,
       ordering:gameQuery.sortOrder,
       search:gameQuery.searchText
      }
   })

})

export default useGames;