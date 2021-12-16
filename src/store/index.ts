import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import userReducer from '../features/Auth/redux/userSlice';
import appointmentReducer from '../features/Appointment/redux/appointmentSlice';
import patientReducer from '../features/Patient/redux/PatientSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    appointment: appointmentReducer,
    patient: patientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
