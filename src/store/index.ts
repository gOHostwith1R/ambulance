import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import userReducer from '../features/Auth/redux/userSlice';
import appointmentReducer from '../features/Appointment/redux/appointmentSlice';
import patientReducer from '../features/Patient/redux/PatientSlice';
import resolutionsReducer from '../features/Resolutions/redux/resolutionsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    appointment: appointmentReducer,
    patient: patientReducer,
    resolutions: resolutionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
