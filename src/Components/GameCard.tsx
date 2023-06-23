import { Card, CardBody, HStack, Heading, Image,Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import CropImageURL from "../Services/image-url";
import Emoji from "./Emoji";

export interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={CropImageURL(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList platform={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize="2xl">{game.name} <Emoji rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
