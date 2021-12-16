import styled, { css } from 'styled-components';
import { LinkToPageStyledProps } from './types';

export const LinkToPageStyled = styled.span <LinkToPageStyledProps>`
  ${(props) => props.variant === 'auth' && css`
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    text-decoration-line: underline;

    color: #7297FF;
`};
  
  ${(props) => props.type === 'inForgotPassword' && css`
    margin: 0 0 0 3px;
    display: inline-block;
  `}
`;
