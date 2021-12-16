import React from 'react';
import { HeaderUserStyled } from './HeaderUser.styled';

export interface HeaderUserProps {
  children?: React.ReactNode | JSX.Element,
}

const HeaderUser: React.FC <HeaderUserProps> = ({ children }) => (
  <HeaderUserStyled>
    {children}
  </HeaderUserStyled>
);

export default HeaderUser;
