import React from 'react';
import { ContentHeaderStyled } from './content.header.styled';

const ContentHeader = ({ children }) => (
  <ContentHeaderStyled>
    {children}
  </ContentHeaderStyled>
);

export default ContentHeader;
