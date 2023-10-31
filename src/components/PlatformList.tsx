import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'

import { Platform } from '../hooks/usePlatforms'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props{
    platforms: Platform[]
    size?: number
}



function PlatformList({platforms, size}:Props) {

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
       {platforms.map((platform)=> <Icon w={size} h={size} key={platform.id} as={iconMap[platform.slug]}/> )}
    </HStack>
  )
}

export default PlatformList
