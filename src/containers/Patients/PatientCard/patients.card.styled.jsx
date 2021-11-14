import styled from 'styled-components';

export const PatientsCardStyled = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  width: 400px;
  @media(max-width: 1056px) {
    max-width: none;
    width: auto;
    flex-grow: 1;
  }
`;
