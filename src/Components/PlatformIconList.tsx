import {FaWindows,FaPlaystation,FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import { HStack, Icon } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { IconType } from "react-icons";

interface Props{
  platform:Platform[]
}
const PlatformIconsList = ({platform}:Props) => {
  const Iconmap: {[key:string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe
  }
  return (
    <HStack marginY={1}>
      {platform.map( platform => 
      <Icon key={platform.id} as={Iconmap[platform.slug]} color="gray.500"/>)}
    </HStack>
  )
}

export default PlatformIconsList;
