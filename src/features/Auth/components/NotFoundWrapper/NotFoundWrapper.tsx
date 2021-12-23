import React from 'react';
import { NotFoundWrapperStyled } from './NotFoundWrapper.styled';
import { NotFoundWrapperProps } from './types';

export const NotFoundWrapper = ({ children }: NotFoundWrapperProps) => (
  <NotFoundWrapperStyled>
    {children}
  </NotFoundWrapperStyled>
);
