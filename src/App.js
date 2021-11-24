import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';

import customTheme from './styles/customTheme.js';

import Navbar from './components/Navbar';
import GridContainer from './components/grid/GridContainer.jsx';
import BagContainer from './components/BagContainer.jsx';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <DndProvider backend={HTML5Backend}>
        <Navbar />
        <Flex p={5}>
          <BagContainer />
          <GridContainer />
        </Flex>
      </DndProvider>
    </ChakraProvider>
  );
}

export default App;
