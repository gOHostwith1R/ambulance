import { SerializedError } from '@reduxjs/toolkit';

export interface AppointmentSliceTypes {
  status: 'pending' | 'fulfilled' | 'rejected' | '',
  makeAppointmentStatus: 'pending' | 'fulfilled' | 'rejected' | '',
  error: null | string | SerializedError | unknown,
  listOfAppointments: [],
  specializations: [],
  timeSlots: string[],
  doctors: [],
}

export interface MakeAppointmentProps {
  date: string,
  reason: string,
  note: string,
  doctorID: string,
}
