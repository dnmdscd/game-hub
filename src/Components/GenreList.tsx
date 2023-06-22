import { Text, HStack, List, ListItem, Image } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import CropImageURL from '../Services/image-url';

const GenreList = () => {
    const { data} = useGenres();
   
    return (
    <List>
      {data.map(genre => 
      <ListItem key={genre.id} paddingY="5px">
        <HStack>
          <Image src={CropImageURL(genre.image_background)} boxSize="32px" borderRadius={8}/>
          <Text fontSize="lg">{genre.name}</Text>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList