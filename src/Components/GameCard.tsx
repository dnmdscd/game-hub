import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconsList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import CropImageURL from "../Services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

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
        <Heading fontSize="2xl">
          <Link to={'/games/' + game.slug}>
              {game.name}
          </Link>
          <Emoji rating={game.rating_top}/>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
