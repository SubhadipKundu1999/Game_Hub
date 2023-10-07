import { useEffect, useState } from "react"

import api from "../api-client"
import { CanceledError } from "axios";

interface Genre{
    id:number,
    name:string,
    slug:string,
    games_count: string,
    image_background:string
}

interface getGenres{

    count: number,
    results: Genre[];
}




const useGenres=()=>{

const [genres, setGenres] = useState<Genre[]>([]);
const[error, setError] = useState(null);

useEffect(()=>{

    const controller = new AbortController();

    api
    .get<getGenres>("https://api.rawg.io/api/genres", {signal: controller.signal})
    .then(response=>
        {
            setGenres(response.data.results);

        })
    .catch(error=>{
        
        if(error instanceof CanceledError) return; 
        setError(error);
        
    });


    return()=> controller.abort();

},[])


return {genres, error};
}


export default  useGenres;

