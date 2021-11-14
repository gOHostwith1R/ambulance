import React from 'react';
import { Link } from 'react-router-dom';
import { PatientsButtonWrapperStyled } from './pattients.button.wrapper.styled';
import MainButton from '../../../components/Main/MainButton';

const PatientsButtonWrapper = () => (
  <PatientsButtonWrapperStyled>
    <Link to="/appointments">
      <MainButton primary="true">Patients</MainButton>
    </Link>
    <MainButton light="true">Resolutions</MainButton>
  </PatientsButtonWrapperStyled>
);

export default PatientsButtonWrapper;
