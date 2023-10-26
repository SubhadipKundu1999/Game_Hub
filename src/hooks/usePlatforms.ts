import { useQuery } from '@tanstack/react-query';
import useData, { fetchData } from './useData';
import apiClient from '../api-client';

 export interface Platform{
    id:number,
    name:string,
    slug:string
 }

// const usePlatforms = (selectedPlatform:Platform | null)=> useData<Platform>("/platforms/lists/parents")


const  usePlatforms =(selectedPlatform:Platform | null)=>
 useQuery<fetchData<Platform>, Error>({

 queryKey:['platforms'],
 queryFn:()=> 
   apiClient.get<fetchData<Platform>>("/platforms/lists/parents")
   .then((res)=>res.data)


})

export default usePlatforms;