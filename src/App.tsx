import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatfromSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText:string
}

function App() {
  const [gameQuery, setGameQuery]=useState<GameQuery>({} as GameQuery);

  return <Grid
  templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}
  templateColumns={{
    base: "1fr",
    lg: "200px 1fr"
  }}
  >
    <GridItem area="nav">
      <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
    </GridItem>
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery, genre })}/>
      </GridItem>
    </Show>
    <GridItem area="main">
      <Box  paddingLeft={2}>
        <GameHeading gameQuery={gameQuery}/>
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform= {gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
          </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery, sortOrder})} />
        </Flex>
      </Box>
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>
}

export default App
