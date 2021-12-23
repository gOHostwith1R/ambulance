import React from 'react';
import { SpanImageVisibleStyled } from './SpanImageVsible.styled';
import { SpanImageVisibleProps } from './types';

const SpanImageVisible: React.FC <SpanImageVisibleProps> = ({
  visiblePassword,
  setTypePassword,
}) => (
  <SpanImageVisibleStyled
    visiblePassword={visiblePassword}
    onClick={setTypePassword}
  />
);

export default SpanImageVisible;
