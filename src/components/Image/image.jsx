import React from 'react';
import { ImageStyled } from './image.styled';

const Image = ({
  variant, position, img, top, right, width,
}) => (
  <ImageStyled
    variant={variant}
    position={position}
    img={img}
    top={top}
    right={right}
    width={width}
  />
);

export default Image;
