import styled, { css } from 'styled-components';
import { TitleWrapperStyledProps } from './types';

export const TitleWrapperStyled = styled.div <TitleWrapperStyledProps>`
    ${(props) => props.withIcon === 'true' && css`
      display: flex;
      flex-direction: row;
      gap: 16px;
      align-items: center;
    `}
  margin-bottom: 40px;
`;
