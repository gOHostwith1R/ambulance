import styled, { css } from 'styled-components';

export const AvatarStyled = styled.img`
  ${(props) => props.variant === 'card' && css`
    width: 48px;
    height: 48px;
  `};
  ${(props) => props.variant === 'header-avatar' && css`
    width: 40px;
    height: 40px;
  `};
`;
