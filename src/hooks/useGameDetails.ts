import { useQuery } from "@tanstack/react-query";
import APIClient from "../api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games")


const useGame =(slug:string)=>
{
    return  useQuery<Game, Error>({
        queryKey:['games', slug],
        queryFn:()=>apiClient.get(slug)
      })
    }

    export default useGame