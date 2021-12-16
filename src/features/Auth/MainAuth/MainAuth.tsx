import React from 'react';
import { MainAuthStyled } from './MainAuth.styled';

export interface MainAuthProps {
  children?: React.ReactNode | JSX.Element,
}

const MainAuth: React.FC <MainAuthProps> = ({ children }) => (
  <MainAuthStyled>
    { children }
  </MainAuthStyled>
);

export default MainAuth;
