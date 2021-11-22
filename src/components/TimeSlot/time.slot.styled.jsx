import styled, { css } from 'styled-components';

export const TimeSlotStyled = styled.button`
  cursor: pointer; 
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
 
  ${(props) => props.status === 'disabled' && css`
    background: #DCE0EC;
    color: #F9FAFF;
  `};
  ${(props) => props.status === 'inactive' && css`
    background: #FFFFFF;
    box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
    color: #202225;
    &:hover,
    &:focus{
      border: 1px solid #7297FF;
      color: #7297FF;
    }
  `};

  ${(props) => props.active === 'active' && css`
    border: 1px solid #7297FF;
    color: #7297FF; 
  `};
}
  
`;
