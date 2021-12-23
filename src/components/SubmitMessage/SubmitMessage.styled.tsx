import styled, { css } from 'styled-components';
import { SubmitMessageStyledProps } from './types';

export const SubmitMessageStyled = styled.div <SubmitMessageStyledProps>`
  position: absolute;
  bottom: 32px;
  left: 32px;
  max-width: 329px;
  background-color: #34C197;
  border-radius: 12px;
  z-index: 999;
  min-width: 260px;
  padding: 24px 24px 32px 72px;
  ${(props) => props.variant === 'success' && css`
    background-color: #34C197;
  `};

  ${(props) => props.variant === 'error' && css`
    background: #FF2567;
  `};

  ${(props) => props.visibility === 'false' && css`
   display: none;
  `};
`;
