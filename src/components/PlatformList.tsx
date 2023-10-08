import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'

import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import usePlatforms from '../hooks/usePlatforms'

interface Props{
    platforms: Platform[]
}



function PlatformList({platforms}:Props) {

    const iconMap:{[key:string]:IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox : FaXbox,
        nintendo: SiNintendo,
        mac:FaApple,
        linux: FaLinux,
        ios:MdPhoneIphone 
    }

  return (
    <HStack>
       {platforms.map((platform)=> <Icon key={platform.id} as={iconMap[platform.slug]}/> )}
    </HStack>
  )
}

export default PlatformList
