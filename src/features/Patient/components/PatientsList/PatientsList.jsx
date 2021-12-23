import React from 'react';
import { EmptyState } from '../../../../components';
import formatISOtoUTC from '../../../../helpers/formatISOtoUTC';
import PatientCard from '../PatientCard';

const PatientsList = ({ listOfAppointments, handleSetOpenModal }) => (
  listOfAppointments.length === 0
    ? <EmptyState /> : listOfAppointments.map((item) => {
      const { patient } = item;
      const dateVisit = formatISOtoUTC(item.visit_date);
      return (
        <PatientCard
          dateVisit={dateVisit}
          item={item}
          patient={patient}
          key={item.visit_date}
          handleSetOpenModal={handleSetOpenModal}
        />
      );
    })
);

export default PatientsList;
