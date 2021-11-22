import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
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

  ${(props) => props.variant === 'createAppointments' && css`
    border: 1px solid #DCE0EC;
    box-sizing: border-box;
    width: 27vw;
    padding: 16px;
    box-shadow: 0 4px 32px rgba(218, 228, 255, 0.16);
    border-radius: 8px;
  `};

`;
