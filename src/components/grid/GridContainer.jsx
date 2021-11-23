import React, { useState, useEffect } from 'react';
import {
  Center,
  Box,
  Button,
  Spacer,
  Heading,
  Flex,
  SimpleGrid,
  Container,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import GridCard from './GridCard';
import axios from 'axios';

const GridContainer = () => {
  const [devices, setDevices] = useState([]);
  const [offset, setOffset] = useState(0);
  const [disableBackward, setDisableBackward] = useState(true);
  const numberOfDevicesPerPage = 25;

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://www.ifixit.com/api/2.0/wikis/CATEGORY?offset=${offset}&limit=${numberOfDevicesPerPage}`
      );
      let response = await res.data;
      console.log(response);
      setDevices(response);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    getData();
  }, [offset]);

  const handlePageForward = () => {
    let newOffset = offset + numberOfDevicesPerPage;
    setDisableBackward(false);
    setOffset(newOffset);
  };

  const handlePageBackward = () => {
    setOffset(offset - numberOfDevicesPerPage);
    let newOffset = offset - numberOfDevicesPerPage;
    if (newOffset > 0) {
      setOffset(newOffset);
      setDisableBackward(false);
    }
    if (newOffset === 0) {
      setDisableBackward(true);
    }
  };

  return (
    <>
      <Box>
        <Flex direction="row" px={5} pb={2}>
          <Button
            colorScheme="teal"
            isDisabled={disableBackward}
            variant="solid"
            borderRadius="100%"
            onClick={() => handlePageBackward()}
          >
            <ArrowBackIcon />
          </Button>
          <Spacer />
          <Heading> Devices </Heading>
          <Spacer />
          <Button
            colorScheme="teal"
            borderRadius="100%"
            variant="solid"
            onClick={() => handlePageForward()}
          >
            <ArrowForwardIcon />
          </Button>
        </Flex>
        <SimpleGrid
          columns={6}
          spacing="15px"
          border="2px"
          borderColor="brand.blue"
          borderRadius="lg"
          py="10px"
          w="1050px"
        >
          {devices.map((entry, index) => {
            return (
              <GridCard
                key={entry.wikiid}
                image={entry.image.thumbnail}
                title={entry.display_title}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};
export default GridContainer;
