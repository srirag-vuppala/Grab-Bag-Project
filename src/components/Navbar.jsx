import { Box, HStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = () => {
  return (
    <Box>
      <HStack bgColor="brand.navbarBlue" h="5em" justify="center" align="center">
        <Heading justifySelf="center" color="white">IFixit Grab Bag Project </Heading>
        <ColorModeSwitcher justifySelf="flex-end" color="white"/>
      </HStack>
    </Box>
  );
};

export default Navbar;