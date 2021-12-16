import React from 'react';
import { AvatarStyled } from './avatar.styled';

type AvatarProps = {
  src: string,
  variant: string,
  alt: string,
};

const Avatar = ({ src, variant, alt }: AvatarProps) => (
  <AvatarStyled src={src} variant={variant} alt={alt} />
);

export default Avatar;
