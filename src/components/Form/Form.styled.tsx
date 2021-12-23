import styled, { css } from 'styled-components';
import { FormProps } from './types';

export const FormStyled = styled.form <FormProps>`
  width: 368px;
  grid-area: form;
  display: flex;
  flex-direction: column;
  
  ${(props) => props.variant === 'makeAppointment' && css`
    width: 100%;
    height: 100%;
    overflow: auto;
  `};
  @media(max-width: 768px) {
   width: auto;
  }
`;
