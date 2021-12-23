import React from 'react';
import { ImageStyled } from './Image.styled';
import { ImageProps } from './types';

export const Image: React.FC <ImageProps> = ({
  variant, img, onClick,
}) => (
  <ImageStyled
    variant={variant}
    img={img}
    onClick={onClick}
  />
);
