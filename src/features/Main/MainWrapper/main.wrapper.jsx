import React from 'react';
import { MainWrapperStyled } from './main.wrapper.styled';

const MainWrapper = ({ children }) => (
  <MainWrapperStyled>
    {children}
  </MainWrapperStyled>
);

export default MainWrapper;
