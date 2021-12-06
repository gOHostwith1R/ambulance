import React from 'react';
import EmptyState from '../../../components/EmptyState';
import formatISOtoUTC from '../../../helpers/formatISOtoUTC';
import PatientCard from '../PatientCard';

const PatientsList = ({ listOfAppointments, statusForDoctor }) => (
  listOfAppointments.length === 0 && statusForDoctor !== 'loading'
    ? <EmptyState /> : listOfAppointments.map((item) => {
      const { patient } = item;
      const dateVisit = formatISOtoUTC(item.visit_date);
      return (
        <PatientCard
          dateVisit={dateVisit}
          item={item}
          patient={patient}
          key={item.visit_date}
        />
      );
    })
);

export default PatientsList;
