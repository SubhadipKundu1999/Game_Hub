import {Card, CardBody, Skeleton, SkeletonText, VStack } from '@chakra-ui/react'
import React from 'react'
import CardContainer from './CardContainer'

function GameCardSkeleton() {
  return (
    <CardContainer>
    <Card>

    <Skeleton height={'200px'} />
    <CardBody>
    
        <SkeletonText />
        <SkeletonText />

      
     <Skeleton/>
    </CardBody>
   </Card>
   </CardContainer>
  )
}

export default GameCardSkeleton
