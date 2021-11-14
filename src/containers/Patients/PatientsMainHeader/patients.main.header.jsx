import React from 'react';
import { PatientsMainHeaderStyled } from './patients.main.header.styled';
import TitleH1 from '../../../components/Main/TitleH1';
import PatientsMainHeaderSearchDropdown from '../PatientsMainHeaderSeachDropdown';

const PatientsMainHeader = () => (
  <PatientsMainHeaderStyled>
    <TitleH1>My Patients</TitleH1>
    <PatientsMainHeaderSearchDropdown />
  </PatientsMainHeaderStyled>
);

export default PatientsMainHeader;
