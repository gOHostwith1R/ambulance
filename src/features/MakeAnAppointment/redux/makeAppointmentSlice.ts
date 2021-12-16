import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MakeAppointmentSliceTypes } from './types';

export const fetchSpecializations = createAsyncThunk(
  'makeAppointment/fetchSpecializations',
  async () => {
    try {
      const response = await fetch('https://reactlabapi.herokuapp.com/api/specializations', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  },
);

const initialState = {
  specializations: [],
  status: 'pending',
  error: '',
} as MakeAppointmentSliceTypes;

const makeAppointmentSlice = createSlice({
  name: 'makeAppointment',
  initialState,
  reducers: {

  },
  extraReducers: ((builder) => {
    builder.addCase(fetchSpecializations.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchSpecializations.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
      state.specializations = action.payload;
    });
    builder.addCase(fetchSpecializations.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    });
  }),
});

export default makeAppointmentSlice.reducer;
