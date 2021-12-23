import React from 'react';
import { PageWrapperStyled } from './PageWrapper.styled';

export interface PageWrapperProps {
  children?: React.ReactNode | JSX.Element,
}

const PageWrapper: React.FC <PageWrapperProps> = ({ children }) => (
  <PageWrapperStyled>
    {children}
  </PageWrapperStyled>
);

export default PageWrapper;
