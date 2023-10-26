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


const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>

    useQuery<fetchData<Genre>, Error>({

        queryKey: ['genres'],
        queryFn:apiClient.getAll, 
        staleTime: 24*60*60*1000,
        initialData: {count:staticGenreData.length, results:staticGenreData}        
    }
    )

export default useGenres;