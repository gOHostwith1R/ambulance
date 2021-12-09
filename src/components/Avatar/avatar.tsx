import React from 'react';
import { AvatarStyled } from './avatar.styled';

type AvatarProps = {
  src: string,
  variant: string,
};

const Avatar = ({ src, variant }: AvatarProps) => (
  <AvatarStyled src={src} variant={variant} />
);

export default Avatar;
