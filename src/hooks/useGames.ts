
import React, { useEffect, useState } from 'react'
import apiClient from "../api-client"
import { CanceledError } from 'axios';

 export interface Platform{
    id:number,
    name:string,
    slug:string
 }

 export interface  Game{
    name: string,
    id: number,
    background_image: String
    parent_platforms: {platform:Platform}[]
}

interface fetchGamesREsponse {

    count: number;
    results: Game[]

}

const useGames=()=>{
    const[games, setGames] =   useState<Game[]>([]);
const[ error, setError] = useState('');

useEffect(()=>{
      const controller = new AbortController();
    apiClient.get<fetchGamesREsponse>('/games',{signal: controller.signal})
    .then(res  => setGames(res.data.results))
    .catch((error)=>{
        if(error instanceof CanceledError) return; 
        setError(error.message)});   
    
    return()=> controller.abort();
    
    },[])

    return {games, error};
}

export default useGames