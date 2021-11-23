import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';

import customTheme from './styles/customTheme.js';

import Navbar from './components/Navbar';
import GridContainer from './components/grid/GridContainer.jsx';
import BagContainer from './components/BagContainer.jsx';


function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />

        <Flex p={5}>
          <BagContainer />
          <GridContainer />
        </Flex>
    </ChakraProvider>
  );
}

export default App;
