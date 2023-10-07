import { Badge, HStack, Text } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'

interface Props{
  criticScore: number
}

function CriticScore({criticScore}:Props) {

const color =  criticScore > 75 ? 'green' : criticScore > 60 ? 'yellow' :   'red'

  return (
    <Badge colorScheme={color} fontSize={'xl'}>
       {criticScore}
      </Badge>
  )
}

export default CriticScore
