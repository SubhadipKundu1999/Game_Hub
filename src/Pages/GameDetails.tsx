import { useState } from "react";
import { useParams } from "react-router-dom";

import { AiOutlineGift, AiOutlineFolderOpen } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';

import useGame from "../hooks/useGameDetails";
import {

  Box,
  Button,
  ButtonGroup,
  Collapse,
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import PlatformList from "../components/PlatformList";
import GameTailer from "../components/GameTailer";
import GameScreenshots from "../components/GameScreenshots";

function GameDetails() {

  const params = useParams();

  const { data: game, error, isLoading } = useGame(params.slug!);
  const gameDescription = game?.description_raw;
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => setShow(!show);


  if (error) return <h1>error.message</h1>

  if (isLoading) return <Spinner />;
  return (

    <Box w='100%' p={{base:4, md:10}}>
      {/* background */}
      <Box backgroundImage={`url(${game.background_image_additional})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        w={'100vw'}
        h={'100vh'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.1,
        }}>

      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <GridItem >


          <HStack spacing={{base:5}} marginBottom={{base:4, md:10}}>
            <Text fontSize={{basse:'10px', md:'20px'}} whiteSpace={'nowrap'} >{game.released}</Text>
            <PlatformList platforms={game.parent_platforms.map(p => p.platform)} />
            <Text fontSize={{basse:'10px', md:'20px'}} >Average Play TIme {game.playtime} hours</Text>
          </HStack>

          <Heading fontSize={{ sm: '36px', lg: '72px' }} fontWeight={'700'} lineHeight={{ lg: '74px', sm: '40px' }} marginBottom={10}>
            {game.name}
          </Heading>

          <Box display={'flex'} flexDirection={{base:'column', lg:'row'} } gap={'20px'} w={'100%'} marginBottom={{base:4,}}>

            <Button variant='solid' w={{base:'100%', lg:'33%'}} colorScheme='telegram' rightIcon={<IoIosAddCircle    size={'50px'} />} h='auto'  >
              <div style={{ textAlign: 'left', width:'100%'}}>
                <p>Add to</p>
                <Heading fontSize={'lg'}>MY GAMES</Heading>
              </div>
            </Button>

            <Button variant='outline' w={{base:'100%', lg:'33%'}} colorScheme='telegram' rightIcon={<AiOutlineGift size={'50px'} />} h='auto'>
              <div style={{ textAlign: 'left', width:'100%'}}>
                <p>Add to</p>
                <Heading fontSize={'lg'}>Wish List</Heading>
              </div>

            </Button>
            <Button variant='ghost' w={{base:'100%', lg:'33%'}}colorScheme='telegram' rightIcon={<AiOutlineFolderOpen size={'50px'} />} h='auto'>
              <div style={{ textAlign: 'left', width:'100%'}}>
                <p>Save to</p>
                <Heading fontSize={'lg'}>MY Collectoion</Heading>
              </div>
            </Button>
          </Box>

          <Text>Click to Rate</Text>

          <HStack w={'100%'} marginBottom={10}>
            <ButtonGroup variant='outline' spacing='0' w={'100%'}>
              <Button variant='solid' w='50%' borderRadius={0} colorScheme='whatsapp'>Excilent</Button>
              <Button variant='solid' w='30%' borderRadius={0} colorScheme='yellow'>good</Button>
              <Button variant='solid' w='20%' borderRadius={0} colorScheme='red'>ok</Button>
            </ButtonGroup>
          </HStack>


          {/* game details */}
          <Heading fontSize={'xl'}>About</Heading>
          <Box marginBottom={10} >
            <Text>{gameDescription?.slice(0, 300)}</Text>
            <Collapse in={show}>{gameDescription}</Collapse>

            <Button colorScheme="yellow" size="sm" onClick={handleToggle} mt="1rem">
              {show ? "Show less" : "Show more"}
            </Button>
          </Box>


          {/* game other details */}
          <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={4}
          >
            <GridItem >
              <Text opacity={0.3}>Platforms</Text>

              <Box marginY={'4'}>
                <PlatformList size={8} platforms={game.parent_platforms.map(p => p.platform)} />
              </Box>
            </GridItem>

            <GridItem >
              <Text opacity={0.3}>Genres</Text>
              <Box marginY={'4'}>
                {game.genres?.map((genre) => <Text fontSize={'xl'}>{genre.name}</Text>)}
              </Box>
            </GridItem>

            <GridItem  >
              <Text opacity={0.3}>Release Date</Text>
              <Text marginY={'4'} fontSize={'xl'} fontWeight={500}>{game.released}</Text>
            </GridItem>

            <GridItem >
              <Text opacity={0.3}>Devlopers</Text>
              <Box marginY={'4'}>
                {game.developers?.map((devloper) => <Text fontSize={'xl'}>{devloper.name}</Text>)}
              </Box>
            </GridItem>

          </Grid>

          <Text opacity={0.4}> Website</Text>
          <a href={game.website}>{game.website}</a>
        </GridItem>

        <GridItem px={{base:'2', md:'10'}}>
          <GameTailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>

      </SimpleGrid>

    </Box>
  );
}

export default GameDetails;
