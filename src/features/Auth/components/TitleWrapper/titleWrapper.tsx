import React from 'react';
import { TitleWrapperProps } from './types';
import { TitleWrapperStyled } from './titleWrapper.styled';

const TitleWrapper: React.FC <TitleWrapperProps> = ({ children, withIcon = 'false' }) => (
  <TitleWrapperStyled withIcon={withIcon}>
    {children}
  </TitleWrapperStyled>
);

export default TitleWrapper;
