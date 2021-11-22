import React from 'react';
import { ContentWrapperStyled } from './content.wrapper.styled';

const ContentWrapper = ({ children }) => (
  <ContentWrapperStyled>
    {children}
  </ContentWrapperStyled>
);

export default ContentWrapper;
