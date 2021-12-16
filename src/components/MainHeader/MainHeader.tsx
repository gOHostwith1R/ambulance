import React from 'react';
import { MainHeaderStyled } from './MainHeader.styled';
import HeaderLogo from '../HeaderLogo';

export interface MainHeaderProps {
  children: JSX.Element,
}

const MainHeader: React.FC <MainHeaderProps> = ({ children }) => (
  <MainHeaderStyled>
    <HeaderLogo />
    {children}
  </MainHeaderStyled>
);

export default MainHeader;
