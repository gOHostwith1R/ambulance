import styled, { css } from 'styled-components';
import { ImageProps } from './types';

export const ImageStyled = styled.svg <ImageProps>`
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  position: absolute;
  ${(props) => props.variant === 'multiply' && css`
    background-image: url(${props.img});
    top: 20px;
    right: 25px;
    cursor: pointer;
  `};

  ${(props) => props.variant === 'checkCircle' && css`
    background-image: url(${props.img});
    left: 32px;
  `};
`;
