import styled, { css } from 'styled-components';
import { TimeSlotStyledProps } from './types';

export const TimeSlotStyled = styled.button <TimeSlotStyledProps>`
  font-family: 'Poppins', sans-serif;
  cursor: pointer; 
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  background: #DCE0EC;
  color: #F9FAFF;

  ${(props) => props.status && css`
    background: #FFFFFF;
    box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
    color: #202225;
    &:hover,
    &:focus{
      border: 1px solid #7297FF;
      color: #7297FF;
    }
  `};
}
  
`;
