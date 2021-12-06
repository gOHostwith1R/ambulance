import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AppointmentList from '../../features/Main/AppointmentList';

describe('Should render appointments page', () => {
  it('should render appointments ', () => {
    const listOfAppointments = [
      {
        id: 'c55d6400-503a-11ec-b7df-f1784d8070ff',
        visit_date: '2021-11-29T14:00:00.000Z',
        reason: 'pain pain',
        note: 'note',
        status: 'waiting',
        doctor: {
          first_name: 'Igor',
          last_name: 'Igorevich',
          photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
          id: 'b8962260-4b95-11ec-9a6e-b3b5e1a51f7b',
        },
      },
      {
        id: 'b748a280-5071-11ec-b7df-f1784d8070ff',
        visit_date: '2021-11-29T11:00:00.000Z',
        reason: 'reason',
        note: '',
        status: 'waiting',
        doctor: {
          first_name: 'Anastasia',
          last_name: 'Bekasova',
          photo: 'https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg',
          id: 'b8962260-4b95-11ec-9a6e-b3b5e1a51f7b',
        },
      },
    ];

    const statusForPatient = 'resolved';

    render(
      <AppointmentList listOfAppointments={listOfAppointments} statusForPatient={statusForPatient} />,
    );
    expect(screen.getByText('Igor Igorevich'));
    expect(screen.getByText('Anastasia Bekasova'));
    expect(screen.getByText('reason'));
    expect(screen.getByText('pain pain'));
  });
  it('should render empty list ', () => {
    const emptyListOfAppointments = [];
    const statusForPatient = 'resolved';

    render(<AppointmentList listOfAppointments={emptyListOfAppointments} statusForPatient={statusForPatient} />);

    expect(screen.getByText('You have no patients yet. To create a patient profile, please contact your administrator.'));
  });
});
