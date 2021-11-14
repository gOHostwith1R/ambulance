import React from 'react';
import { PatientsCardStyled } from '../../Patients/PatientCard/patients.card.styled';
import AppointmentsCardHeader from '../AppointmentsCardHeader';
import AppointmentsCardBody from '../AppointmentsCardBody';

const AppointmentsCard = () => (
  <PatientsCardStyled>
    <AppointmentsCardHeader />
    <AppointmentsCardBody />
  </PatientsCardStyled>
);

export default AppointmentsCard;
