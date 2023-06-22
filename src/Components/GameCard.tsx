import { Card, CardBody, HStack, Heading, Image,Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import CropImageURL from "../Services/image-url";

export interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={CropImageURL(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl}">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList platform={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
