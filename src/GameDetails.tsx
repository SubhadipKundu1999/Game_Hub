import { useState } from "react";
import { useParams } from "react-router-dom";

import useGame from "./hooks/useGameDetails";
import {
  Box,
  Button,
  Collapse,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";

function GameDetails() {
  const params = useParams();

  const { data, error, isLoading } = useGame(params.slug!);
  const gameDescription = data?.description_raw;
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => setShow(!show);

  if (error) return error.message;

  if (isLoading) return <Spinner />;
  return (
    <Box p={"4"}>
      <Heading size={"2xl"}>{data?.name}</Heading>

      <Text>{gameDescription?.slice(0, 300)}</Text>

      <Collapse in={show}>{gameDescription}</Collapse>
      <Button colorScheme="yellow" size="sm" onClick={handleToggle} mt="1rem">
        {show ? "Show less" : "Show more"}
      </Button>
    </Box>
  );
}

export default GameDetails;
