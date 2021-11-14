import styled from 'styled-components';
import arrow from '../../../assets/svg/arrow-icon.svg';

export const ButtonStyled = styled.button`
  background-color: #7297FF;
  border-radius: 8px;
  border: none;
  padding: 16px 57px 16px 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;

  color: #FFFFFF;
  
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: 85% 50%;
  
  margin-top: 3vh;
  cursor: pointer;
  align-self: flex-start; 
  @media(max-width: 768px) {
    margin-top: 1.5vh;
    padding: 12px 49px 12px 16px;
    font-size: 15px;
    line-height: 130%;
  }
`;
