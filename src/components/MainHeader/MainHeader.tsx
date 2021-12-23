import React from 'react';
import { MainHeaderStyled } from './MainHeader.styled';
import { HeaderLogo } from '../HeaderLogo';
import { MainHeaderProps } from './types';

export const MainHeader: React.FC <MainHeaderProps> = ({ children }) => (
  <MainHeaderStyled>
    <HeaderLogo />
    {children}
  </MainHeaderStyled>
);
