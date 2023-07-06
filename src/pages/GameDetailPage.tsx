import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Spinner, Heading } from '@chakra-ui/react';
import ExpandableText from '../Components/ExpandableText';
import GameAttributes from '../Components/GameAttributes';
import GameTrailer from '../Components/GameTrailer';
import GameScreenshot from '../Components/GameScreenshot';

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
    <GameTrailer gameId={game.id} />
    <GameScreenshot gameId={game.id}/>
    </>
  )
}

export default GameDetailPage