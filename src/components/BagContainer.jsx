import { Box, Center, Container, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import GridCard from './grid/GridCard';

const BagContainer = () => {
  const [bagDevices, setBagDevices] = useState(
    JSON.parse(window.localStorage.getItem('bagDevices')) || []
  );

  const addToBag = item => {
    let bagDevicesIds = []
    bagDevices.forEach((device)=> {
      bagDevicesIds.push(device.id)
    })
    // only add device if it doesn't esist in bag
    if (!bagDevicesIds.includes(item.id)) {
      setBagDevices([...bagDevices, item]);
    }
  };

  useEffect(() => {
    window.localStorage.setItem('bagDevices', JSON.stringify(bagDevices));
  }, [bagDevices]);

  const [{ isOver }, dropRef] = useDrop({
    accept: 'device',
    drop: item => addToBag(item),
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Container>
      <Center>
        <Heading>Backpack</Heading>
      </Center>
      <Box
        border="2px"
        p={5}
        borderRadius="lg"
        borderColor="brand.blue"
        ref={dropRef}
      >
        {isOver && (
          <Box m={40}>
            <Center>Drop here!</Center>
          </Box>
        )}
        {bagDevices.map((entry, index) => (
          <GridCard key={index} image={entry.image} title={entry.title} />
        ))}
        {bagDevices.length === 0 && (
          <Box m={40}>
            <Center>An empty backpack!</Center>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default BagContainer;
