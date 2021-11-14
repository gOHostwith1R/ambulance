import styled, { css } from 'styled-components';

export const MainButtonStyled = styled.button`
  padding: 10px 48px;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  ${(props) => props.primary && css`
    background: #7297FF;
    font-weight: 600;
    line-height: 130%;
    color: #FFFFFF;
`};
  ${(props) => props.light && css`
    background: #FFFFFF;
    line-height: 140%;
    color: #7297FF;
`};

  ${(props) => props.plus && css`
    background-image: url(${props.plus});
    background-repeat: no-repeat;
    background-position: 9px 7px;
`};
  
  ${(props) => props.resolutions && css`
    @media(max-width: 768px) {
      display: none;
    }
`};
  @media(max-width: 420px) {
    padding: 10px 20px;
  }
`;
