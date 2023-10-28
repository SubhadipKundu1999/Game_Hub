import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";


export interface GameQuery{
    genre :number | undefined;
    platform:number | undefined;
    sortOrder: string;
    searchText:string;
  }

interface GameQueryStore{
    gameQuery:GameQuery
    selectPlatform:(platformId:number)=>void,
    selectGenre:(genreId:number)=>void,
    searchGame:(searchText:string)=>void,
    selectSortOrder:(order:string)=>void
}

const useGameQueryStore = create<GameQueryStore>(set=>({
    
    gameQuery:{
        genre :undefined,
        platform:undefined,
        sortOrder:'',
        searchText:''
    },

   selectPlatform:(platformId) => set(store=>({
    gameQuery:{...store.gameQuery,platform:platformId}
   })),
   selectGenre:(genreId)=> set((store)=>({
    gameQuery:{...store.gameQuery,genre:genreId}
   })),
   searchGame:(searchText)=> set((store)=>({gameQuery:{...store.gameQuery,searchText:searchText}
   })),
   selectSortOrder:(order)=> set((store)=>({gameQuery:{...store.gameQuery,sortOrder:order}
   }))

}))

if(process.env.NODE_ENV==='development') mountStoreDevtool('game query store', useGameQueryStore)

export default useGameQueryStore