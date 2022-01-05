import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { AppointmentSliceTypes, MakeAppointmentProps } from './types';
import { fetchHttp } from '../../../helpers';

export const fetchListOfAppointmentsPatient = createAsyncThunk(
  'appointments/fetchListOfAppointmentsPatient',
  async (_, { rejectWithValue }) => {
    try {
      const params = {
        url: 'appointments/patient/me?offset=0&limit=20',
        fetchWithToken: true,
      };
      const data = await fetchHttp(params);
      console.log(data);
      if (data.status) {
        return rejectWithValue(data.status);
      }
      return data;
    } catch (e) {
      return e;
    }
  },
);

export const fetchSpecializations = createAsyncThunk(
  'appointment/fetchSpecializations',
  async () => {
    try {
      const params = {
        url: 'specializations',
        fetchWithToken: true,
      };
      return await fetchHttp(params);
    } catch (e) {
      return e;
    }
  },
);

export const fetchFreeTimeSlot = createAsyncThunk(
  'appointment/fetchFreeTimeSlot',
  async (values: { day:string, idDoctor:string }) => {
    try {
      const { day, idDoctor } = values;
      const params = {
        url: `appointments/time/free?date=${day}&doctorID=${idDoctor}`,
        fetchWithToken: true,
      };
      return await fetchHttp(params);
    } catch (e) {
      return e;
    }
  },
);

export const fetchDoctors = createAsyncThunk(
  'appointment/fetchDoctors',
  async (values:string) => {
    try {
      const params = {
        url: `doctors/specialization/${values}`,
      };
      return await fetchHttp(params);
    } catch (e) {
      return e;
    }
  },
);

export const makeAppointment = createAsyncThunk(
  'appointments/makeAppointment',
  async (values: MakeAppointmentProps, { rejectWithValue }) => {
    try {
      const params = {
        url: 'appointments',
        body: values,
        method: 'POST',
      };
      return await fetchHttp(params);
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);

const initialState: AppointmentSliceTypes = {
  listOfAppointments: [],
  specializations: [],
  timeSlots: [],
  doctors: [],
  status: '',
  makeAppointmentStatus: '',
  error: null,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setMakeAppointmentStatus(state) {
      state.makeAppointmentStatus = '';
    },
  },
  extraReducers: ((builder) => {
    builder
      .addCase(fetchListOfAppointmentsPatient.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.error = null;
        state.listOfAppointments = action.payload.appointments;
      })
      .addCase(fetchSpecializations.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.error = null;
        state.specializations = action.payload;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.error = null;
        state.doctors = action.payload;
      })
      .addCase(fetchFreeTimeSlot.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.error = null;
        state.timeSlots = action.payload;
      })
      .addCase(makeAppointment.fulfilled, (state) => {
        state.makeAppointmentStatus = 'fulfilled';
        state.error = null;
      });
    builder
      .addMatcher(
        isAnyOf(fetchListOfAppointmentsPatient.rejected,
          fetchSpecializations.rejected,
          fetchDoctors.rejected,
          fetchFreeTimeSlot.rejected,
          makeAppointment.rejected),
        (state, action) => {
          state.status = 'rejected';
          state.error = action.payload;
        },
      );
    builder
      .addMatcher(
        isAnyOf(fetchListOfAppointmentsPatient.pending,
          fetchSpecializations.pending,
          fetchDoctors.pending,
          fetchFreeTimeSlot.pending,
          makeAppointment.pending), (state) => {
          state.status = 'pending';
          state.error = null;
        },
      );
  }),
});

export const { setMakeAppointmentStatus } = appointmentSlice.actions;

export default appointmentSlice.reducer;
