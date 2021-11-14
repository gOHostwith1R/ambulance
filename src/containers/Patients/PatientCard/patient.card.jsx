import React from 'react';
import { PatientsCardStyled } from './patients.card.styled';
import PatientCardHeader from '../PatientCardHeader';
import PatientCardBody from '../PatientCardBody/patient.card.body';

const PatientCard = () => (
  <PatientsCardStyled>
    <PatientCardHeader />
    <PatientCardBody />
  </PatientsCardStyled>
);

export default PatientCard;
