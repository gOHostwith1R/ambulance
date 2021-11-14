import React from 'react';
import PatientsHeader from '../../containers/Patients/PatientsHeader';
import Patients from '../../containers/Patients/Patients';
import PatientsMain from '../../containers/Patients/PatientsMain';

const MainPage = () => (
  <Patients>
    <PatientsHeader />
    <PatientsMain />
  </Patients>
);

export default MainPage;
