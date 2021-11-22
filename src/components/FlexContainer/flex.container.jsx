import React from 'react';
import { FlexContainerStyled } from './flex.container.styled';

const FlexContainer = ({
  children, direction, gap,
  margin, alignItems, justContent, overflow, position,
}) => (
  <FlexContainerStyled
    direction={direction}
    gap={gap}
    margin={margin}
    alignItems={alignItems}
    justContent={justContent}
    overflow={overflow}
    position={position}
  >
    {children}
  </FlexContainerStyled>
);

export default FlexContainer;
