import styled, { css } from 'styled-components';

export const ImageStyled = styled.svg`
  ${(props) => props.variant === 'background' && css`
    background-image: url(${props.img});
    background-repeat: no-repeat;
    position: ${props.position};
    top: ${props.top};
    right: ${props.right};
    width: ${props.width};
  `};
`;
