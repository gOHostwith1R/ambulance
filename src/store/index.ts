import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import userReducer from '../features/Auth/redux/userSlice';
import appointmentReducer from '../features/Appointment/redux/appointmentSlice';
import patientReducer from '../features/Patient/redux/PatientSlice';
import makeAppointmentReducer from '../features/MakeAnAppointment/redux/makeAppointmentSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    appointment: appointmentReducer,
    patient: patientReducer,
    makeAppointment: makeAppointmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
