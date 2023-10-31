import { Grid, GridItem , HStack, Show} from '@chakra-ui/react'

import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'


 
function Home() {

  return (
<Grid 
 templateAreas={{
  base: ` "nav" "main" `,
  lg:` "nav nav" "aside main" `
  } } 
  templateColumns={{
    base: "1fr",
    lg:"200px  1fr"
  }}

>
<GridItem area='nav' >

  </GridItem>
<Show above='lg'>
<GridItem area='aside' padding={'20px'} marginTop={'30px'}>
  <GenresList />
  </GridItem>
</Show>
<GridItem area='main'  padding={'40px'}>
  <GameHeading />
  <HStack>
  <PlatformSelector />
  <SortSelector/>
  </HStack>

<GameGrid />
</GridItem>
</Grid>
  )
}

export default Home