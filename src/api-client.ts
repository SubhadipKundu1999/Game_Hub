import axios, { AxiosRequestConfig } from "axios";



export interface fetchData<T> {
    count: number,
    next: string | null,
    results: T[]
}

const axiosInstance= axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "79f0861735bf46439db0fccd736589f4"
    }

})


export  default class APIClient<T>{

    endPoint:string;

    constructor(endPoint: string){
        this.endPoint=endPoint
    }


    getAll=(config:AxiosRequestConfig)=>{
        return axiosInstance
        .get<fetchData<T>>(this.endPoint,config)
        .then((res)=>res.data)
    }
}


