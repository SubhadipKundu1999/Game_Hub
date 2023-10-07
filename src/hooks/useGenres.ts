import useData from "./useData";

export interface Genre{
    id:number,
    name:string,
    slug:string,
    games_count: string,
    image_background:string
}





const useGenres=()=> useData<Genre>("/genres")



export default  useGenres;

