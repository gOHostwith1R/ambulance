import { SerializedError } from '@reduxjs/toolkit';

export interface MakeAppointmentSliceTypes {
  specializations: [],
  status: 'pending' | 'resolved' | 'rejected' | string,
  error: null | string | SerializedError,
}
