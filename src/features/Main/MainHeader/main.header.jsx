import React from 'react';
import { MainHeaderStyled } from './main.header.styled';
import HeaderLogo from '../HeaderLogo';

const MainHeader = ({ children }) => (
  <MainHeaderStyled>
    <HeaderLogo />
    {children}
  </MainHeaderStyled>
);

export default MainHeader;
