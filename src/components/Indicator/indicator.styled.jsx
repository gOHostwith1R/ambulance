import styled, { css } from 'styled-components';

export const IndicatorStyled = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  ${(props) => props.variant === 'withBorder' && css`
    border: 3px solid #E3EBFF;
    position: absolute;
    top: -3px;
    right: -3px;
  `};

  ${(props) => props.status === 'confirmed' && css`
    background-color: #34C197;
  `};
  ${(props) => props.status === 'waiting' && css`
    background-color: #7297FF;
  `};

  ${(props) => props.status === 'canceled' && css`
    background-color: #FF2567;
  `};
`;
