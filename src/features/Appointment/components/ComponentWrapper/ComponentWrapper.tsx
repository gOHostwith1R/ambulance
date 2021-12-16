import React from 'react';
import { ComponentWrapperStyled } from './ComponentWrapperStyled';

export interface ComponentWrapperProps {
  children?: React.ReactNode | JSX.Element,
}

const ComponentWrapper: React.FC <ComponentWrapperProps> = ({ children }) => (
  <ComponentWrapperStyled>
    {children}
  </ComponentWrapperStyled>
);

export default ComponentWrapper;
