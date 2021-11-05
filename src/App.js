import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';

import customTheme from './styles/customTheme.js'

import Navbar from './components/Navbar'

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />

 
    </ChakraProvider>
  );
}

export default App;
