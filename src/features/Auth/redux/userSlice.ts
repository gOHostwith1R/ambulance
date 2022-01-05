import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { UserSignInProps, UserSignUpProps, UserSliceTypes } from './types';
import { API_BASE } from '../../../core/consts/api';
import saveToken from '../../../helpers/saveToken';
import { fetchHttp } from '../../../helpers';

const storageUser = 'userAuth';

export const fetchRefreshToken = createAsyncThunk(
  'auth/fetchRefreshToken',
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
  async (_, { rejectWithValue }) => {
    try {
      const params = {
        url: 'auth/profile',
        fetchWithToken: true,
      };
      const data = await fetchHttp(params);
      if (data.status) {
        return rejectWithValue(data.status);
      }
      localStorage.setItem('role', data.role_name);
      return data;
    } catch (e) {
      return e;
    }
  },
);

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (values:UserSignUpProps, { dispatch }) => {
    try {
      const {
        userName, firstName, lastName, password,
      } = values;
      const params = {
        url: 'auth/registration',
        body: {
          userName, firstName, lastName, password,
        },
        method: 'POST',
      };
      const data = await fetchHttp(params);
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
  async (values:UserSignInProps, { dispatch }) => {
    try {
      const { userName, password } = values;
      const params = {
        url: 'auth/login',
        body: {
          userName, password,
        },
        method: 'POST',
      };
      const data = await fetchHttp(params);
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
      .addMatcher(
        isAnyOf(signInUser.pending,
          signInUser.pending,
          fetchUserProfile.pending,
          fetchRefreshToken.pending), (state) => {
          state.status = 'pending';
          state.error = null;
        },
      );
    builder
      .addMatcher(
        isAnyOf(signInUser.rejected,
          signUpUser.rejected, fetchUserProfile.rejected,
          fetchRefreshToken.rejected), (state, action) => {
          state.status = 'rejected';
          state.error = action.payload;
        },
      );
  },
});

export default userSlice.reducer;
