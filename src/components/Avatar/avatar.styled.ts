import styled, { css } from 'styled-components';

type AvatarStyledProps = {
  variant: string,
};

export const AvatarStyled = styled.img < AvatarStyledProps >`
  ${(props) => props.variant === 'card' && css`
    width: 48px;
    height: 48px;
  `};
  ${(props) => props.variant === 'header-avatar' && css`
    width: 40px;
    height: 40px;
  `};
`;
