import useGameQueryStore from "../strores/gameQueryStore"
import useGenres from "./useGenres"



const useGenre = () => {
    const genre = useGameQueryStore(store=> store.gameQuery.genre)
    const { data: genres } = useGenres()
    return(genres?.results?.find((element)=> element.id===genre))
}

export default useGenre;