import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  border-radius: 8px;
  border: none;
  cursor: pointer;

  ${(props) => props.endIcon && css`
    background-image: url(${props.endIcon});
    background-repeat: no-repeat;
  `};

  ${(props) => props.startIcon && css`
    background-image: url(${props.startIcon});
    background-repeat: no-repeat;
    background-position: 5%;
  `};
  
  ${(props) => props.pos && css`
    background-position: ${props.pos};
  `};

  ${(props) => props.variant === 'contained' && props.color === 'primary' && css`
    background-color: #7297FF;
    color: #FFFFFF;
  `};

  ${(props) => props.variant === 'contained' && props.color === 'light' && css`
    background: #FFFFFF;
    color: #7297FF;
  `};

  ${(props) => props.group === 'auth' && css`
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  padding: 16px 57px 16px 24px;
  align-self: flex-start;
  `};

  ${(props) => props.group === 'main' && css`
  padding: 10px 48px;
  @media(max-width: 768px) {
    padding: 11px 29px;
  }  
  `};

  ${(props) => props.group === 'main' && props.color === 'primary' && css`
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  `};
  
  ${(props) => props.group === 'main' && props.color === 'light' && css`
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  color: #7297FF;
  `};

  ${(props) => props.disabled === 'disabled' && css`
    background: #DCE0EC;
  `};
  
  @media(max-width: 768px) {
  ${(props) => props.display === '768px' && css`
  display: none;
  `}
`;
