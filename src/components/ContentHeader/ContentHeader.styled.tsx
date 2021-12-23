import styled, { css } from 'styled-components';
import { ContentHeaderStyledProps } from './types';

export const ContentHeaderStyled = styled.div <ContentHeaderStyledProps>`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
  ${(props) => props.variant === 'makeAppointment' && css`
    margin: 72px 0 0 0;
  `}
`;
