import React from 'react';
import { AvatarStyled } from './avatar.styled';

const Avatar = ({ src, variant }) => (
  <AvatarStyled src={src} variant={variant} />
);

export default Avatar;
