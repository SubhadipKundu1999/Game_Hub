import { useQuery } from "@tanstack/react-query"
import APIClient from "../api-client"

interface ScreenShot{
id:number,
image:string
}

const useScreenshots=(gameId:number)=>{

    const apiClient = new APIClient<ScreenShot>("/games/"+gameId+"/screenshots" )

    return useQuery({
        queryKey:['screenshots', gameId],
        queryFn:apiClient.getAll

    })
}

export default useScreenshots;