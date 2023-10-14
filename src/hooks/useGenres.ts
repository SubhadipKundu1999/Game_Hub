import useData from "./useData";
import staticGenreData from "../staticData/staticGenreData";

export interface Genre{
    id:number,
    name:string,
    slug:string,
    games_count: number,
    image_background:string
}





const useGenres=()=> ( {data:staticGenreData, error:null, isLoading:false})



export default  useGenres;

