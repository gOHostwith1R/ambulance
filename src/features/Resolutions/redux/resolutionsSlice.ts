import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ResolutionsSliceTypes } from './types';
import { fetchHttp } from '../../../helpers';

export const fetchListOfResolutions = createAsyncThunk(
  'resolutions/fetchListOfResolutions',
  async () => {
    try {
      const params = {
        url: 'resolutions/patient/me?offset=0&limit=20',
        fetchWithToken: true,
      };
      return await fetchHttp(params);
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
    builder.addCase(fetchListOfResolutions.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.error = null;
      state.listOfResolutions = payload;
    });
    builder.addCase(fetchListOfResolutions.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    });
  }),
});

export const { setChangeArea } = resolutionsSlice.actions;

export default resolutionsSlice.reducer;
