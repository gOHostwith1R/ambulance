import styled, { css } from 'styled-components';
import { TitleProps } from './types';

export const TitleStyled = styled.div <TitleProps>`
  font-style: normal;
  font-weight: 600;
  color: #202225;
  text-overflow: ellipsis;
  margin: 0;
  ${(props) => props.variant === 'h1' && css`
    line-height: 36px;
    font-size: 24px;
    @media(max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  `};

  ${(props) => props.variant === 'h2' && css`
    font-size: 24px;
    line-height: 110%;
    @media(max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  `};

  ${(props) => props.variant === 'h3' && css`
    font-size: 17px;
    line-height: 130%;
  `};
  
  ${(props) => props.variant === 'h4' && css`
    font-size: 15px;
    line-height: 130%;
  `};

  ${(props) => props.variant === 'title' && css`
    font-weight: 500;
    font-size: 16px;
  `};
`;
