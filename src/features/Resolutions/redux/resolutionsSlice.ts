import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ResolutionsSliceTypes } from './types';
import { API_BASE } from '../../../core/consts/api';
import { getRefreshToken } from '../../../store/slices/userSlice';

export const fetchListOfResolutions = createAsyncThunk(
  'resolutions/fetchListOfResolutions',
  async () => {
    try {
      const token = JSON.parse(localStorage.getItem('userAuth') as string);
      const response = await fetch(`${API_BASE}resolutions/patient/me?offset=0&limit=20`, {
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

const initialState: ResolutionsSliceTypes = {
  listOfResolutions: [],
  status: 'pending',
  error: null,
  textResolutions: '',
};

const resolutionsSlice = createSlice({
  name: 'resolutions',
  initialState,
  reducers: {
    setChangeArea: (state, action) => {
      state.textResolutions = action.payload;
    },
  },
  extraReducers: ((builder) => {
    builder.addCase(fetchListOfResolutions.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchListOfResolutions.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
      state.listOfResolutions = action.payload.resolutions;
    });
    builder.addCase(fetchListOfResolutions.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    });
  }),
});

export const { setChangeArea } = resolutionsSlice.actions;

export default resolutionsSlice.reducer;
