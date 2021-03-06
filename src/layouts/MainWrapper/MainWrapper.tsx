import React from 'react';
import { MainWrapperStyled } from './MainWrapper.styled';

export interface MainWrapperProps {
  children?: React.ReactNode | JSX.Element,
}

const MainWrapper: React.FC <MainWrapperProps> = ({ children }) => (
  <MainWrapperStyled>
    {children}
  </MainWrapperStyled>
);

export default MainWrapper;
