import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppointmentSliceTypes } from './types';
import { API_BASE } from '../../../core/consts/api';
import { getRefreshToken } from '../../../store/slices/userSlice';

const initialState = {
  listOfAppointments: [],
  status: 'pending',
  error: null,
} as AppointmentSliceTypes;

export const fetchListOfAppointmentsDoctor = createAsyncThunk(
  'appointments/fetchListOfAppointmentsDoctor',
  async () => {
    try {
      const token = JSON.parse(localStorage.getItem('userAuth') as string);
      const response = await fetch(`${API_BASE}appointments/doctor/me?offset=0&limit=20`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.access_token,
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      if (response.status === 403) {
        getRefreshToken();
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  },
);

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {

  },
  extraReducers: ((builder) => {
    builder.addCase(fetchListOfAppointmentsDoctor.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchListOfAppointmentsDoctor.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
      state.listOfAppointments = action.payload.appointments;
    });
    builder.addCase(fetchListOfAppointmentsDoctor.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    });
  }),
});

export default patientSlice.reducer;
