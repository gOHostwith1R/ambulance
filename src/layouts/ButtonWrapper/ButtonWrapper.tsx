import React from 'react';
import { ButtonWrapperStyled } from './ButtonWrapper.styled';

export interface ButtonWrapperProps {
  children?: React.ReactNode | JSX.Element,
}

const ButtonWrapper: React.FC <ButtonWrapperProps> = ({ children }) => (
  <ButtonWrapperStyled>
    {children}
  </ButtonWrapperStyled>
);

export default ButtonWrapper;
