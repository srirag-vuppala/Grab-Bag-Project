import React from 'react';
import GridCard from './GridCard';
import { useDrag } from 'react-dnd';
import { Box } from '@chakra-ui/react';

const GridCardDraggable = ({ id, title, image }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'device',
    item: { id, title, image },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <Box ref={dragRef}>
      <GridCard draggable id={id} title={title} image={image} />
    </Box>
  );
};

export default GridCardDraggable;
