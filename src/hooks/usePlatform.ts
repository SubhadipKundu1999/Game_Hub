import usePlatforms from "./usePlatforms";






const usePlatform = (id?:number) => {
    const { data: platforms } = usePlatforms()
    return (platforms?.results?.find((element) => element.id === id))
}





export default usePlatform