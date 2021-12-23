import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE } from '../../../core/consts/api';
import { getRefreshToken } from '../../../store/slices/userSlice';
import { AppointmentSliceTypes, MakeAppointmentProps } from './types';

export const fetchListOfAppointmentsPatient = createAsyncThunk(
  'appointments/fetchListOfAppointmentsPatient',
  async () => {
    try {
      const token = JSON.parse(localStorage.getItem('userAuth') as string);
      const response = await fetch(`${API_BASE}appointments/patient/me?offset=0&limit=20`, {
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
      return await response.json();
    } catch (e) {
      return e;
    }
  },
);

export const fetchSpecializations = createAsyncThunk(
  'appointment/fetchSpecializations',
  async () => {
    try {
      const response = await fetch(`${API_BASE}specializations`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      return await response.json();
    } catch (e) {
      return e;
    }
  },
);

export const fetchFreeTimeSlot = createAsyncThunk(
  'appointment/fetchFreeTimeSlot',
  async (params: { day:string, idDoctor:string }) => {
    try {
      const { day, idDoctor } = params;
      const response = await fetch(`${API_BASE}appointments/time/free?date=${day}&doctorID=${idDoctor}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      return await response.json();
    } catch (e) {
      return e;
    }
  },
);

export const fetchDoctors = createAsyncThunk(
  'appointment/fetchDoctors',
  async (params:string) => {
    try {
      const response = await fetch(`${API_BASE}doctors/specialization/${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      return await response.json();
    } catch (e) {
      return e;
    }
  },
);

export const makeAppointment = createAsyncThunk(
  'appointments/makeAppointment',
  async (values: MakeAppointmentProps, { rejectWithValue }) => {
    try {
      const {
        date, reason, note, doctorID,
      } = values;
      const token = JSON.parse(localStorage.getItem('userAuth') as string);
      const response = await fetch(`${API_BASE}appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.access_token,
        },
        body: JSON.stringify({
          date,
          reason,
          note,
          doctorID,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
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
    builder.addCase(fetchListOfAppointmentsPatient.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    })
      .addCase(fetchSpecializations.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchFreeTimeSlot.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(makeAppointment.pending, (state) => {
        state.makeAppointmentStatus = 'pending';
        state.error = null;
      });
    builder.addCase(fetchListOfAppointmentsPatient.fulfilled, (state, action) => {
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
    builder.addCase(fetchListOfAppointmentsPatient.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    })
      .addCase(fetchSpecializations.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(fetchFreeTimeSlot.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(makeAppointment.rejected, (state, action) => {
        state.makeAppointmentStatus = 'rejected';
        state.error = action.payload;
      });
  }),
});

export const { setMakeAppointmentStatus } = appointmentSlice.actions;

export default appointmentSlice.reducer;
