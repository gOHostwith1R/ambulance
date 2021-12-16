import styled, { css } from 'styled-components';
import { ImageProps } from './types';

export const ImageStyled = styled.svg <ImageProps>`
  ${(props) => props.variant === 'background-message' && css`
    background-image: url(${props.img});
    background-repeat: no-repeat;
    position: absolute;
    top: 13px;
    right: 25px;
    width: 25px;
  `};
`;
