import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react';

const BagContainer = () => {
  return (
    <Container>
      <Heading>Backpack</Heading>
      <Box border="2px" p={5} borderRadius="lg" borderColor="brand.blue">
      </Box>
      ;
    </Container>
  );
};

export default BagContainer;
