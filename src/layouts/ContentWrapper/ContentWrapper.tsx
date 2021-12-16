import React from 'react';
import { ContentWrapperStyled } from './ContentWrapper.styled';

export interface ContentWrapperProps {
  children?: React.ReactNode | JSX.Element,
}

const ContentWrapper: React.FC <ContentWrapperProps> = ({ children }) => (
  <ContentWrapperStyled>
    {children}
  </ContentWrapperStyled>
);

export default ContentWrapper;
