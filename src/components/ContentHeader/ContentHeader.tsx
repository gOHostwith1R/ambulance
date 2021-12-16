import React from 'react';
import { ContentHeaderStyled } from './ContentHeader.styled';
import { ContentHeaderProps } from './types';

const ContentHeader: React.FC <ContentHeaderProps> = ({ children, variant }) => (
  <ContentHeaderStyled variant={variant}>
    {children}
  </ContentHeaderStyled>
);

export default ContentHeader;
