import React from 'react';
import EmptyState from '../../../../components/EmptyState';
import formatISOtoUTC from '../../../../helpers/formatISOtoUTC';
import AppointmentCard from '../AppointmentCard';

const AppointmentList = ({ listOfAppointments, status }) => (
  listOfAppointments.length === 0 && status !== 'pending'
    ? <EmptyState /> : listOfAppointments.map((item) => {
      const { doctor } = item;
      const dateVisit = formatISOtoUTC(item.visit_date);
      return (
        <AppointmentCard
          dateVisit={dateVisit}
          item={item}
          doctor={doctor}
          key={item.visit_date}
        />
      );
    }));
export default AppointmentList;