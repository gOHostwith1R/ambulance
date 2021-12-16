import styled from 'styled-components';
import { InputStyledProps } from './types';

export const InputStyled = styled.input <InputStyledProps>`
  border: 1px solid #dce0ec;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  padding: 16px 64px;
  font-weight: 400;
  font-size: 17px;
  outline: none;
  line-height: 1.25;
  background-color: #FFFFFF;
  background-image: url(${(props) => props.icon});
  background-position: 6% 46%;
  background-repeat: no-repeat;
  &:focus
  {
    border: 1px solid #7297FF;
  }
  -webkit-text-fill-color: #A1ABC9;
  @media(max-width: 768px) {
    font-size: 15px;
    line-height: 140%;
    padding: 10px 26px 10px 48px;
    background-position: 15px 11px;
  }
`;
