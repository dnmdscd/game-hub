import { Menu, MenuButton, MenuList, Button, MenuItem  } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"

const PlatformSelector = () => {
    const {data, error} = usePlatforms();
    if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
        <MenuList>
            {data.map(platform=> <MenuList key={platform.id}>{platform.name}</MenuList>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector