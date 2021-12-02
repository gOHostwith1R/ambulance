import styled, { css } from 'styled-components';

export const ParagraphStyled = styled.p`
  margin: ${(props) => props.margin || '0'};
  color:  ${({ color }) => color || '#202225'};
  text-align: ${({ textAlign }) => textAlign};
  ${(props) => props.variant === 'plain-2' && props.font === 'regular' && css`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;
  `};

  ${(props) => props.variant === 'caption' && css`
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
  `};

  ${(props) => props.variant === 'caption' && props.status && css`
    color: #FFFFFF;
  `};

  ${(props) => props.variant === 'plain-2' && props.font === 'semiBold' && css`
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
  `};

  ${(props) => props.variant === 'plain-1' && props.font === 'semiBold' && props.status === 'success' && css`
   font-weight: 600;
   font-size: 17px;
   line-height: 24px;

   color: #FFFFFF;
  `};

  ${(props) => props.variant === 'plain-1' && props.font === 'regular' && css`
    font-size: 17px;
    line-height: 24px;

    color: #A1ABC9;

  `};

  ${(props) => props.group === 'link' && css`
    cursor: pointer;
  `};

  ${(props) => props.color === 'waiting' && css`
    cursor: pointer;
  `};
`;
