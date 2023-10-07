  import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
  interface Props{

    children:ReactNode

  }
  function CardContainer({children}:Props) {
    return (

     <Box overflow={'hidden'}>
        {children}
     </Box>
    )
  }
  
  export default CardContainer
  