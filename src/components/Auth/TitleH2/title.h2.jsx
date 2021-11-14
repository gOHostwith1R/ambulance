import React from 'react';
import { TitleH2Styled } from './title.h2.styled';

const TitleH2 = ({ children, arrowLeftIcon, arrow }) => (
  <TitleH2Styled arrowLeftIcon={arrowLeftIcon} arrow={arrow}>
    {children}
  </TitleH2Styled>
);

export default TitleH2;
