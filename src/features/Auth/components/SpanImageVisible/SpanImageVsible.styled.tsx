import styled from 'styled-components';
import { SpanImageVisibleStyledProps } from './types';

export const SpanImageVisibleStyled = styled.span <SpanImageVisibleStyledProps>`
  background: url(${({ visiblePassword }) => visiblePassword}) no-repeat center;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 33px;
  top: 14px;
  cursor: pointer;
`;
