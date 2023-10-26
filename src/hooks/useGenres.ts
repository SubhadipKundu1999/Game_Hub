import { useQuery } from "@tanstack/react-query";
import APIClient, { fetchData} from "../api-client"
import staticGenreData from "../staticData/staticGenreData";


export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string
}

console.log(staticGenreData);
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>

    useQuery<fetchData<Genre>, Error>({

        queryKey: ['genres'],

        queryFn:apiClient.getAll, 

        initialData :staticGenreData,

        staleTime: 24*60*60*1000,

     
    }
    )

export default useGenres;