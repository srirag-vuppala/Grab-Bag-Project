import { Box, Container, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import GridCard from './grid/GridCard';

const BagContainer = () => {
  const [bagDevices, setBagDevices] = useState(JSON.parse(window.localStorage.getItem('bagDevices')) || [])

  const addToBag = item => {
    setBagDevices(bagDevices =>
      !bagDevices.includes(item) ? [...bagDevices, item] : bagDevices
    );
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

  // useEffect(() => {
  //   setBagDevices(localStorage === null ? [] : localStorage)
  // }, [])

  return (
    <Container>
      <Heading>Backpack</Heading>
      <Box
        border="2px"
        p={5}
        borderRadius="lg"
        borderColor="brand.blue"
        ref={dropRef}
      >
        {console.log(localStorage)}
        {bagDevices.map((entry, index) => (
          <GridCard
            key={index}
            image={entry.image}
            title={entry.title}
            id={entry.id}
          />
        ))}
        {isOver && <Box>Drop here</Box>}
      </Box>
    </Container>
  );
};

export default BagContainer;
