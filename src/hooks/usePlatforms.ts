import { useQuery } from '@tanstack/react-query';
import APIClient, { fetchData } from '../api-client';


const apiClient = new APIClient<Platform>("/platforms/lists/parents");
 export interface Platform{
    id:number,
    name:string,
    slug:string
 }

// const usePlatforms = (selectedPlatform:Platform | null)=> useData<Platform>("/platforms/lists/parents")


const  usePlatforms =(selectedPlatform:Platform | null)=>
 useQuery<fetchData<Platform>, Error>({

 queryKey:['platforms'],
 queryFn:
   apiClient.getAll


})

export default usePlatforms;