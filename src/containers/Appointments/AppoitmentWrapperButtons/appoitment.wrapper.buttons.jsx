import React from 'react';
import { Link } from 'react-router-dom';
import { PatientsButtonWrapperStyled } from '../../Patients/PatientsButtonWrapper/pattients.button.wrapper.styled';
import MainButton from '../../../components/Main/MainButton';

const AppointmentsButtonWrapper = () => (
  <PatientsButtonWrapperStyled>
    <Link to="/patients">
      <MainButton light="true">Profile</MainButton>
    </Link>
    <MainButton primary="true">Appointments</MainButton>
    <MainButton light="true" resolutions="true">Resolutions</MainButton>
  </PatientsButtonWrapperStyled>
);

export default AppointmentsButtonWrapper;
