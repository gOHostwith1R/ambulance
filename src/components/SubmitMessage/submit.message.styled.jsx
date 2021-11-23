import styled, { css } from 'styled-components';

export const SubmitMessageStyled = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  max-width: 329px;
  background-color: #34C197;
  border-radius: 12px;
  z-index: 999;
  padding: 24px 24px 32px 72px;
  ${(props) => props.variant === 'success' && css`
    background-color: #34C197;
  `};

  ${(props) => props.variant === 'error' && css`
    background: #FF2567;
  `};
`;
