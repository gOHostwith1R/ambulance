import React from 'react';
import TitleH1 from '../../../components/Main/TitleH1';
import { PatientsMainHeaderStyled } from '../../Patients/PatientsMainHeader/patients.main.header.styled';
import AppointmentsDropdownButton from '../AppointmentsDropdownButton';

const AppointmentsMainHeader = () => (
  <PatientsMainHeaderStyled>
    <TitleH1>My Appointments</TitleH1>
    <AppointmentsDropdownButton />
  </PatientsMainHeaderStyled>
);

export default AppointmentsMainHeader;
