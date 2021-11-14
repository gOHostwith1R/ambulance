import { useLocation } from 'react-router-dom';
import React from 'react';
import { PatientsHeaderWrapperStyled } from './patients.header.wrapper.styled';
import HeaderLogo from '../HeaderLogo';
import HeaderDoctor from '../HeaderDoctor';
import PatientHeader from '../../Appointments/PatientHeader/patient.header';

const PatientsHeaderWrapper = () => {
  const location = useLocation();
  return (
    <PatientsHeaderWrapperStyled>
      <HeaderLogo />
      {location.pathname === '/patients'
        ? <HeaderDoctor />
        : <PatientHeader />}
    </PatientsHeaderWrapperStyled>
  );
};

export default PatientsHeaderWrapper;
