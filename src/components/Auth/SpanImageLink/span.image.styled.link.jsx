import styled from 'styled-components';

export const SpanImageStyledLink = styled.span`
  background: url(${({ arrowLeftIcon }) => arrowLeftIcon}) no-repeat center;
  width: 8px;
  height: 14px;
  position: absolute;
  left: 0;
  top: 10px;
  cursor: pointer;
  &::after {
    content: '';
    background-image: url(${({ visiblePassword }) => visiblePassword});
    position: absolute;
    height: 20px;
    width: 20px;
  }
`;
