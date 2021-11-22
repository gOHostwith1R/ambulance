import React from 'react';
import { HeaderUserStyled } from './header.user.styled';

const HeaderUser = ({ children }) => (
  <HeaderUserStyled>
    {children}
  </HeaderUserStyled>
);

export default HeaderUser;
