import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserSignInProps, UserSignUpProps, UserSliceTypes } from './types';
import { API_BASE } from '../../../core/consts/api';
import saveToken from '../../../helpers/saveToken';

const storageUser = 'userAuth';

export const fetchRefreshToken = createAsyncThunk(
  'auth/getRefreshToken',
  async () => {
    const token = JSON.parse(localStorage.getItem('userAuth') as string);
    try {
      const response = await fetch(`${API_BASE}auth/token/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.refresh_token,
        },
      });
      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      saveToken(data);
      return data;
    } catch (e) {
      return e;
    }
  },
);

export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, { rejectWithValue, dispatch }) => {
    const token = JSON.parse(localStorage.getItem('userAuth') as string);
    try {
      const response = await fetch(`${API_BASE}auth/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.access_token,
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      localStorage.setItem('role', data.role_name);
      return data;
    } catch ({ message }) {
      if (message === 'Forbidden') dispatch(fetchRefreshToken());
      return rejectWithValue(message);
    }
  },
);

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (params:UserSignUpProps, { dispatch }) => {
    try {
      const {
        userName, password, firstName, lastName,
      } = params;
      const response = await fetch(`${API_BASE}auth/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName,
          password,
          firstName,
          lastName,
        }),
      });
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      saveToken(data);
      await dispatch(fetchUserProfile());
      return data;
    } catch (e) {
      return e;
    }
  },
);

export const signInUser = createAsyncThunk(
  'user/SignIn',
  async (params:UserSignInProps, { dispatch }) => {
    const { userName, password } = params;
    try {
      const response = await fetch(`${API_BASE}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      saveToken(data);
      await dispatch(fetchUserProfile());
      return data;
    } catch (e) {
      return e;
    }
  },
);

const initialState = {
  status: 'pending',
  error: null,
  role: '',
  userProfile: {},
  auth: !!localStorage.getItem(storageUser),
} as UserSliceTypes;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(signUpUser.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      });
    builder
      .addCase(signInUser.fulfilled, (state) => {
        state.status = 'fulfilled';
        state.auth = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.status = 'fulfilled';
        state.auth = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.error = null;
        state.userProfile = action.payload;
      });
    builder
      .addCase(signInUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      });
  },
});

export default userSlice.reducer;
