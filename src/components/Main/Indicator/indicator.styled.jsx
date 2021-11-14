import styled, { css } from 'styled-components';

export const IndicatorStyled = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${(props) => props.color && props.color};
  position: absolute;
  ${(props) => props.avatar && css`
    border: 3px solid #E3EBFF;
    top: -4px;
    right: -2px;
  `}
  ${(props) => props.status && css`
    top: 28px;
    left: 72px;
  `}
`;
