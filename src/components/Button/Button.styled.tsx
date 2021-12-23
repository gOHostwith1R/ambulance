import styled, { css } from 'styled-components';
import Arrow from '../../assets/svg/arrow-icon.svg';
import { ButtonStyledProps } from './types';

export const ButtonStyled = styled.button <ButtonStyledProps>`
  border-radius: 8px;
  border: none;
  cursor: pointer;
  
  ${(props) => props.startIcon && css`
    background-image: url(${props.startIcon});
    background-repeat: no-repeat;
    background-position: 5%;
    @media(max-width: 512px) {
     background-image: none;
    }
    
  `};

  ${(props) => props.color === 'primary' && css`
    background-color: #7297FF;
    color: #FFFFFF;
  `};

  ${(props) => props.color === 'light' && css`
    background-color: #FFFFFF;
    color: #7297FF;
    &:hover {
      background-color: #7297FF;
      color: #FFFFFF;
      font-weight: 600;
    }
  `};

  ${(props) => props.group === 'auth' && css`
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    padding: 16px 57px 16px 24px;
    align-self: flex-start;
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    background-position: 80% 50%;
  `};

  ${(props) => props.group === 'main' && css`
    padding: 10px 48px;
    ${props.size === 'small' && css`
      padding: 10px 30px 10px 40px;
    `}
    ${props.color === 'primary' && css`
      font-weight: 600;
      font-size: 15px;
      line-height: 130%;
    `};
    ${props.color === 'light' && css`
      font-weight: normal;
      font-size: 15px;
      line-height: 140%;
      
      ${props.filling === 'outlined' && css`
        border: 1px solid #DCE0EC;
        font-weight: 600;
        font-size: 15px;
        line-height: 130%;
        color: #A1ABC9;
      `}
    `};
    @media(max-width: 768px) {
        padding: 11px 29px;
    }
    @media(max-width: 512px) {
      padding: 9px 14px;
      font-size: 11px;
      line-height: 100%;
    }
  `};

  ${(props) => props.disabled && css`
    background: #DCE0EC;
  `};
`;
