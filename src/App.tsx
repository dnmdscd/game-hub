import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import PlatformSelector from "./Components/PlatfromSelector";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery{
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
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
      <NavBar />
    </GridItem> 
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>
      <GridItem area="main">
        <Box  paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>   
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
  </Grid>
}

export default App