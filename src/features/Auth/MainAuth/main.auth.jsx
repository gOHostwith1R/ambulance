import React from 'react';
import { MainAuthStyled } from './main.auth.styled';

const MainAuth = ({ children }) => (
  <MainAuthStyled>
    { children }
  </MainAuthStyled>
);

export default MainAuth;
