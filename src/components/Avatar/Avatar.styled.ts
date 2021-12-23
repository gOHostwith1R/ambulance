import styled, { css } from 'styled-components';
import { AvatarStyledProps } from './types';

export const AvatarStyled = styled.img < AvatarStyledProps >`
  ${(props) => props.variant === 'card' && css`
    width: 48px;
    height: 48px;
  `};
  ${(props) => props.variant === 'header-avatar' && css`
    width: 40px;
    height: 40px;
  `};
  ${(props) => props.variant === 'profile-avatar' && css`
    width: 136px;
    height: 136px;
    border-radius: 16px;
    ${props.edited === 'edited' && css`
      opacity: 70%;
      position: relative;
    `};
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  `}
`;
