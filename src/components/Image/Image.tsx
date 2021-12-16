import React from 'react';
import { ImageStyled } from './Image.styled';
import { ImageProps } from './types';

const Image: React.FC <ImageProps> = ({
  variant, img,
}) => (
  <ImageStyled
    variant={variant}
    img={img}
  />
);

export default Image;
