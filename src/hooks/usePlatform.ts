import useGameQueryStore from "../strores/gameQueryStore";
import usePlatforms from "./usePlatforms";

const usePlatform = () => {

const platform = useGameQueryStore(store=> store.gameQuery.platform)

    const { data: platforms } = usePlatforms()

    return (platforms?.results?.find((element) => element.id === platform))
}



export default usePlatform