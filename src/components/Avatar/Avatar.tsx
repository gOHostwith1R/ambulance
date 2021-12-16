import React from 'react';
import { AvatarStyled } from './Avatar.styled';
import { AvatarProps } from './types';

export const Avatar = ({ src, variant, alt }: AvatarProps) => (
  <AvatarStyled src={src} variant={variant} alt={alt} />
);
