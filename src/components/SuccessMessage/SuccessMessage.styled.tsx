import styled from 'styled-components';
import { SuccessMessageProps } from './types';

export const SuccessMessageStyled = styled.div <SuccessMessageProps>`
  flex-direction: column;
  max-width: 329px;
  background-color: #34C197;
  border-radius: 12px;
  z-index: 999;
  padding: 24px 24px 32px 72px;
  background-image: url(${(props) => props.checkCircle});
  background-repeat: no-repeat;
  background-position: 20px 25px;
  background-size: 24px 24px;
  position: relative;
  display: ${(props) => (props.visibility === 'true' ? 'flex' : 'none')}
`;
