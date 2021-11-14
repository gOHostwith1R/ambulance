import React from 'react';
import { useLocation } from 'react-router-dom';
import { PatientsMainWrapperStyled } from './patients.main.wrapper.styled';
import PatientsButtonWrapper from '../PatientsButtonWrapper';
import PatientsMainHeader from '../PatientsMainHeader';
import PatientsContentWrapper from '../PatientsContentWrapper';
import AppointmentsButtonWrapper from '../../Appointments/AppoitmentWrapperButtons';
import AppointmentsMainHeader from '../../Appointments/AppointmentsMainHeader';
import AppointmentsContentWrapper from '../../Appointments/AppointmentsContentWrapper';
import SuccessMessage from '../../Appointments/SuccessMessage';

const PatientsMainWrapper = () => {
  const location = useLocation();
  return (
    <PatientsMainWrapperStyled>
      {location.pathname === '/patients'
        ? (
          <>
            <PatientsButtonWrapper />
            <PatientsMainHeader />
            <PatientsContentWrapper />
          </>
        )
        : (
          <>
            <AppointmentsButtonWrapper />
            <AppointmentsMainHeader />
            <AppointmentsContentWrapper />
            <SuccessMessage />
          </>
        )}
    </PatientsMainWrapperStyled>
  );
};

export default PatientsMainWrapper;
