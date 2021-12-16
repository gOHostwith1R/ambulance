import React from 'react';
import { ParagraphStyled } from './Paragrpaph.styled';
import { ParagraphProps } from './types';

const Paragraph: React.FC <ParagraphProps> = ({
  children, variant, font = '', color = '', status = '', group = '',
}) => (
  <ParagraphStyled
    variant={variant}
    font={font}
    color={color}
    status={status}
    group={group}
  >
    { children }
  </ParagraphStyled>
);

export default Paragraph;
