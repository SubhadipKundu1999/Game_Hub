import useData from './useData';

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
    metacritic:number
}

const useGames=()=> useData<Game>('/games')

export default useGames