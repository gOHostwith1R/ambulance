import { SerializedError } from '@reduxjs/toolkit';

export interface AppointmentSliceTypes {
  status: 'pending' | 'resolved' | 'rejected' | string,
  error: null | string | SerializedError,
  listOfAppointments: []
}
