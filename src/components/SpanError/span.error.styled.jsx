import styled, { css } from 'styled-components';

export const SpanErrorStyled = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 120%;
  letter-spacing: -0.24px;

  color: #F6657F;
  position: absolute;
  ${(props) => props.variant === 'auth' && css`
    left: 0;
    top: 100%;
`};
  ${(props) => props.variant === 'date' && css`
    bottom: -20px;
`};
`;
