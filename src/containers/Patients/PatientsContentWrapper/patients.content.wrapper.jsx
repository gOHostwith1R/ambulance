import React, { useState } from 'react';
import { PatientsContentWrapperStyled } from './patients.content.wrapper.styled';
import PatientCard from '../PatientCard';
import EmptyState from '../EmptyState';

const PatientsContentWrapper = () => {
  const [isEmpty] = useState(true);
  return (
    <PatientsContentWrapperStyled>
      {isEmpty
        ? (
          <>
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
          </>
        )
        : <EmptyState />}
    </PatientsContentWrapperStyled>
  );
};

export default PatientsContentWrapper;
