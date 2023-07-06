import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Spinner, Heading, Text } from '@chakra-ui/react';
import ExpandableText from '../Components/ExpandableText';
import DefinitionItem from '../Components/DefinitionItem';
import CriticScore from '../Components/CriticScore';
import GameAttributes from '../Components/GameAttributes';

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error} =useGame(slug!);

  if (isLoading) return <Spinner/>;
    
  if (error || !game) throw error;

  return (
    <>
    <Heading>{game.name}</Heading>
    <ExpandableText>{game.description_raw}</ExpandableText>
    <GameAttributes game={game}/>
    </>
  )
}

export default GameDetailPage