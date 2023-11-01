import { Grid, GridItem , HStack, Show} from '@chakra-ui/react'

import GameGrid from '../components/GameGrid'
import GenresList from '../components/GenresList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameHeading from '../components/GameHeading'


 
function Home() {

  return (
<Grid 
 templateAreas={{
  base: `"main"`,
  lg:`  "aside main" `
  } } 
  templateColumns={{
    base: "1fr",
  md:'1fr',
  lg:'250px 1fr'
  }}
>

<Show above='md'>
<GridItem area='aside' padding={'20px'} marginTop={'30px'}>
  <GenresList />
  </GridItem>
</Show>
<GridItem area='main'  padding={'20px'}>
  <GameHeading />
  <HStack >
  <PlatformSelector />
  <SortSelector/>
  </HStack>

<GameGrid />
</GridItem>
</Grid>
  )
}

export default Home