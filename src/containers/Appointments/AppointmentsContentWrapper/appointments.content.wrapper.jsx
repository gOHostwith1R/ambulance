import React from 'react';
import { PatientsContentWrapperStyled } from '../../Patients/PatientsContentWrapper/patients.content.wrapper.styled';
import AppointmentsCard from '../AppointmentsCard';

const AppointmentsContentWrapper = () => (
  <PatientsContentWrapperStyled>
    <AppointmentsCard />
    <AppointmentsCard />
    <AppointmentsCard />
    <AppointmentsCard />
  </PatientsContentWrapperStyled>
);

export default AppointmentsContentWrapper;
