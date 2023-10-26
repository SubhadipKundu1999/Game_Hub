import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import api from "../api-client"
import { fetchData } from "./useData";
import staticGenreData from "../staticData/staticGenreData";
export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string
}

const useGenres = () =>

    useQuery<fetchData<Genre>, Error>({

        queryKey: ['genres'],
        queryFn: () =>
            api.get("/genres")
                .then((res) => res.data),
        staleTime:24*60*60*1000,
        initialData:{count:staticGenreData.length, results:staticGenreData}        
    }
    )

export default useGenres;