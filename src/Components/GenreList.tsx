import { Text, HStack, List, ListItem, Image, Spinner, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import CropImageURL from '../Services/image-url';

interface Props{
  onSelectGenre: (genre: Genre)=> void;

}

const GenreList = ({onSelectGenre}: Props) => {
    const { data, isloading, error} = useGenres();
    if (error) return null;
    if (isloading) return <Spinner/>;
    return (
    <List>
      {data.map(genre => 
      <ListItem key={genre.id} paddingY="5px">
        <HStack>
          <Image src={CropImageURL(genre.image_background)} boxSize="32px" borderRadius={8}/>
          <Button onClick={()=> onSelectGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList