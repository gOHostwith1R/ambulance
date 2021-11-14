import React from 'react';
import styled from 'styled-components';

const PatientsStyled = styled.div`
  padding-top: 80px;
`;

const Patients = ({ children }) => (
  <PatientsStyled>
    {children}
  </PatientsStyled>
);

export default Patients;
