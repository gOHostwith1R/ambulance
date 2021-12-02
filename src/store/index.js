import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import appointmentReducer from './slices/appointmentSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    appointment: appointmentReducer,
  },
});
