import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE } from '../../core/consts/api';
import { getRefreshToken } from './userSlice';

export const getSpecializations = createAsyncThunk(
  'appointment/getSpecializations',
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

export const getDoctors = createAsyncThunk(
  'appointment/getDoctors',
  async (id) => {
    try {
      const response = await fetch(`${API_BASE}doctors/specialization/${id}`, {
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

export const getFreeTime = createAsyncThunk(
  'appointments/getFreeTime',
  async (dayDoctors) => {
    try {
      const response = await fetch(`${API_BASE}appointments/time/free?date=${dayDoctors.dayVisit}&doctorID=${dayDoctors.isSelectedDoctor.id}`, {
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

export const getListOfAppointmentsPatient = createAsyncThunk(
  'appointments/getListOfAppointmentsPatient',
  async () => {
    try {
      const token = JSON.parse(localStorage.getItem('userAuth'));
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
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  },
);

export const getListOfAppointmentsDoctor = createAsyncThunk(
  'appointments/getListOfAppointmentsDoctor',
  async () => {
    try {
      const token = JSON.parse(localStorage.getItem('userAuth'));
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

export const makeAppointment = createAsyncThunk(
  'appointments/makeAppointment',
  async ({
    date, doctorID, note, reason,
  }) => {
    try {
      const token = JSON.parse(localStorage.getItem('userAuth'));
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

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    dayDoctor: {
      isSelectedDoctor: '',
      dayVisit: '',
    },
    isFreeTime: [],
    listOfAppointments: [],
    occupation: '',
    specializations: [],
    doctorName: [],
    reason: '',
    note: '',
    status: '',
    statusForPatient: '',
    statusForDoctor: '',
    error: '',
  },
  reducers: {
    setDayVisit(state, action) {
      state.dayDoctor.dayVisit = action.payload;
    },
    setIsSelectedDoctor(state, action) {
      state.dayDoctor.isSelectedDoctor = action.payload;
    },
    setStatus(state) {
      state.statusForPatient = '';
      state.statusForDoctor = '';
    },
  },
  extraReducers: {
    [getSpecializations.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getSpecializations.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.specializations = [];
      state.specializations.push(...action.payload);
    },
    [getSpecializations.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    },
    [getDoctors.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getDoctors.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.doctorName = [];
      state.doctorName.push(...action.payload);
    },
    [getDoctors.rejected]: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    },
    [getFreeTime.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getFreeTime.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.isFreeTime = [];
      state.isFreeTime.push(...action.payload);
    },
    [getFreeTime.rejected]: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    },
    [getListOfAppointmentsPatient.pending]: (state) => {
      state.statusForPatient = 'loading';
      state.error = null;
    },
    [getListOfAppointmentsPatient.fulfilled]: (state, action) => {
      state.statusForPatient = 'resolved';
      state.listOfAppointments = action.payload.appointments;
    },
    [getListOfAppointmentsPatient.rejected]: (state, action) => {
      state.error = action.error;
      state.statusForPatient = 'error';
    },
    [getListOfAppointmentsDoctor.pending]: (state) => {
      state.statusForDoctor = 'loading';
      state.error = null;
    },
    [getListOfAppointmentsDoctor.fulfilled]: (state, action) => {
      state.statusForDoctor = 'resolved';
      state.listOfAppointments = action.payload.appointments;
    },
    [getListOfAppointmentsDoctor.rejected]: (state, action) => {
      state.error = action.error;
      state.statusForDoctor = 'error';
    },
  },
});

export const appointmentSelector = (state) => state.appointment;

export const { setDayVisit, setIsSelectedDoctor, setStatus } = appointmentSlice.actions;

export default appointmentSlice.reducer;
