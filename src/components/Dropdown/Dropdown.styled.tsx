import styled from 'styled-components';
import { DropdownContentsStyledProps, DropdownItemsProps, DropdownStyledProps } from './types';

export const DropdownStyled = styled.div <DropdownStyledProps>`
  position: relative;
  display: inline-block;
`;

export const DropdownHeaderStyled = styled.span`
  color: #A1ABC9;
  font-size: 15px;
  line-height: 140%;
`;

export const DropdownMainItemStyled = styled.span`
  color: #7297FF;
  font-size: 15px;
  line-height: 140%;
  margin-left: 16px;
  cursor: pointer;
`;

export const DropdownContentsStyled = styled.div <DropdownContentsStyledProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 28px;
  right: 3px;
  background-color: #f9f9f9;
  filter: drop-shadow(0px 4px 40px rgba(118, 136, 187, 0.16));
  z-index: 1;
`;

export const DropdownItemsStyled = styled.span <DropdownItemsProps>`
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  background: #F9FAFF;
  border-radius: 6px;
  width: ${(props) => (props.variant === 'card' ? '190px' : '138px')};
  height: 40px;
  color: ${(props) => (props.variant === 'Delete' ? '#FF2567' : '#202225')};
  margin: 0;
  padding-top: 10px;
  padding-left: 20px;
  cursor: pointer;
  &:hover {
    background: #F9FAFF
  }
`;
