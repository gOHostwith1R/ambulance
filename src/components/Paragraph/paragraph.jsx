import React from 'react';
import { ParagraphStyled } from './paragrpaph.styled';

const Paragraph = ({
  children, variant, margin, font, color, status, textAlign, group,
}) => (
  <ParagraphStyled
    variant={variant}
    margin={margin}
    font={font}
    color={color}
    status={status}
    textAlign={textAlign}
    group={group}
  >
    { children }
  </ParagraphStyled>
);

export default Paragraph;
