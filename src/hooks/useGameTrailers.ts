import { useQuery } from "@tanstack/react-query";
import APIClient from "../api-client";

interface Trailer{
    id:number,
    name:string;
    preview:string;
    data:{480:string,  max:string}
}



const useGameTrailers=(gameId:number)=>{

    const apiClient = new APIClient<Trailer>('/games/'+gameId+'/movies')

    return  useQuery(
        {
            queryKey:['tailers',gameId],
            queryFn:apiClient.getAll
        }
    )
}

export default useGameTrailers;