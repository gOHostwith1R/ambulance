import styled from 'styled-components';

export const SpanImageVisibleStyled = styled.span`
  background: url(${({ visiblePassword }) => visiblePassword}) no-repeat center;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 33px;
  top: 14px;
  cursor: pointer;
`;
