import styled, { css } from 'styled-components';

export const TextStyled = styled.p`
  margin: ${(props) => (props.title ? '0 0 2px 0' : '0 0 0 0')};
  font-weight: ${(props) => ((props.title || props.card) ? 600 : 500)};
  font-size: ${(props) => (props.title ? '15px' : '17px')};
  line-height: 130%;
  text-overflow: ellipsis;
  color: #202225;
  ${(props) => props.description && css`
    font-size: 15px;
    line-height: 140%;
    color: #202225;
    font-weight: 400;
    overflow: hidden;
    padding-left: 16px;
    @media(max-width: 768px) {
      padding-left: 20px;
    }
  `};
  ${(props) => props.titleCard && css`
    padding-left: 16px;
  `};
  @media(max-width: 768px) {
    font-size: 15px;
  }
  ${(props) => props.emptyState && css`
    font-size: 15px;
    line-height: 140%;
    
    color: #A1ABC9;
    display: inline-block;
    max-width: 461px;
    text-align: center;
  `};

  ${(props) => props.success && css`
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
   
    color: #FFFFFF;
  `};

  ${(props) => props.multiply && css`
    background: url(${props.multiply}) no-repeat 100% 50%;
    cursor: pointer;
  `};
  
`;
