import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppointmentSliceTypes } from './types';
import { fetchHttp } from '../../../helpers';

const initialState: AppointmentSliceTypes = {
  listOfAppointments: [],
  status: 'pending',
  error: null,
  text: '',
};

export const fetchListOfAppointmentsDoctor = createAsyncThunk(
  'appointments/fetchListOfAppointmentsDoctor',
  async (_, { rejectWithValue }) => {
    try {
      const params = {
        url: 'appointments/doctor/me?offset=0&limit=20',
        fetchWithToken: true,
      };
      const data = await fetchHttp(params);
      if (!data.ok) {
        return rejectWithValue(data);
      }
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
    onChangeInput: (state, action) => {
      state.text = action.payload;
    },
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
export const { onChangeInput } = patientSlice.actions;
export default patientSlice.reducer;
