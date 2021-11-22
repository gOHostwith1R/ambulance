import React from 'react';
import { GridContainerStyled } from './grid.container.styled';

const GridContainer = ({ children, variant, gap }) => (
  <GridContainerStyled variant={variant} gap={gap}>
    {children}
  </GridContainerStyled>
);

export default GridContainer;
