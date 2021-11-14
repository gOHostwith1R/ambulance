import React from 'react';
import { SpanImageVisibleStyled } from './span.image.visible.styled';

const SpanImageVisible = ({ visiblePassword, setTypePassword }) => (
  <SpanImageVisibleStyled
    visiblePassword={visiblePassword}
    onClick={setTypePassword}
  />
);

export default SpanImageVisible;
