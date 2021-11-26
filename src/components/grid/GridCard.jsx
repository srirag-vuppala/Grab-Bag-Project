import {
  Heading,
  Stack,
  Box,
  Image,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';

import React from 'react';

const GridCard = ({ title, image }) => {

  return (
    <Box >
      <Center my={4}>
        <Box
          role={'group'}
          p={4}
          maxW='250px'
          maxH='250px'
          w='full'
          h='fit-content'
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow='2xl'
          rounded='lg'
          pos='relative'
          zIndex={1}
        >
          <Box
            rounded='lg'
            mt={-8}
            pos='relative'
            height='150px'
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 2,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(10px)',
              },
            }}
          >
            <Image
              rounded='lg'
              height={150}
              width={190}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={5} align='center'>
            <Heading fontSize='l' fontFamily='body' fontWeight='400'>
              {title}
            </Heading>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
};

export default GridCard;
