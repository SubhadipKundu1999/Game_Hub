import { useEffect, useState } from "react"

import api from "../api-client"
import { Axios, AxiosRequestConfig, CanceledError } from "axios";


interface fetchData<T>{
    count: number,
    results: T[];
}

const useData= <T>(endPoint:string, requestConfig?: AxiosRequestConfig, deps?:any[])=>{

const [data, setData] = useState<T[]>([]);
const[error, setError] = useState("");
const [isLoading, setLoading]= useState(false);

useEffect(()=>{

    const controller = new AbortController();
    setLoading(true);

    api
    .get<fetchData<T>>(endPoint, {signal: controller.signal, ...requestConfig})
    .then(response=>
        {
            setData(response.data.results);
            setLoading(false);

        })
    .catch(err=>{
        
        if(err instanceof CanceledError) return; 
        setError(err);
        setLoading(false);
        
    });


    return()=> controller.abort();

}, deps?[...deps]:[] )


return {data, error, isLoading};
}


export default  useData;

