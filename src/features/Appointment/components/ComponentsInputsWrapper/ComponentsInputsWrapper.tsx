import React from 'react';
import { ComponentsInputsWrapperStyled } from './ComponentsInputsWrapper.styled';

export interface ComponentsInputsWrapperProps {
  children?: React.ReactNode | JSX.Element,
}

const ComponentsInputsWrapper: React.FC <ComponentsInputsWrapperProps> = ({ children }) => (
  <ComponentsInputsWrapperStyled>
    {children}
  </ComponentsInputsWrapperStyled>
);

export default ComponentsInputsWrapper;
