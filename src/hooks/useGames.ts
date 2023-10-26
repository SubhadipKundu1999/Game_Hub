import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import  { fetchData } from './useData';
import apiClient from '../api-client';

 export interface Platform{
    id:number,
    name:string,
    slug:string
 }

 export interface  Game{
    name: string,
    id: number,
    background_image: String
    parent_platforms: {platform:Platform}[],
    metacritic:number,
    rating_top:number
}

// const useGames=(gameQuery:GameQuery)=> (
//    useData<Game>(
//       "/games",
//       {
//          params:
//          {
//           genres:gameQuery.genre?.id,
//           platforms:gameQuery.platform?.id,
//           ordering:gameQuery.sortOrder,
//           search:gameQuery.searchText

//          }
//       },
//      [gameQuery])
// )
const useGames=(gameQuery:GameQuery)=>

useQuery<fetchData<Game>, Error>({

   queryKey:['games',gameQuery],
   queryFn:()=>

apiClient.get<fetchData<Game>>("/games",{
   params:
            {
             genres:gameQuery.genre?.id,
             parent_platforms:gameQuery.platform?.id,
             ordering:gameQuery.sortOrder,
             search:gameQuery.searchText
   
            }
}).then(res=>res.data)

})

export default useGames;