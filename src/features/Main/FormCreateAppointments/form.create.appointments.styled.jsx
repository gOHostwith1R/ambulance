import styled from 'styled-components';

export const FormCreateAppointmentsStyled = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
  @media(max-width: 1474px) {
    flex-direction: column;
    align-items: center;
  }
`;
