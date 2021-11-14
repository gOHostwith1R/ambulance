import styled from 'styled-components';

export const PatientCardBodyStyled = styled.div`
  padding: 24px 32px 40px 34px;
  overflow: hidden;
  @media(max-width: 768px) {
    padding: 16px;
  }
`;

export const PatientCardBodyTimeStyled = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
`;

export const PatientCardBodyDescriptionStyled = styled.div`
  display: flex;
  align-items: center;
`;
