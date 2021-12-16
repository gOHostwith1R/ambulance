import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE } from '../../core/consts/api';
import saveToken from '../../helpers/saveToken';

const storageUser = 'userAuth';

export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async (_, { rejectWithValue }) => {
    const token = JSON.parse(localStorage.getItem('userAuth'));
    try {
      const response = await fetch(`${API_BASE}auth/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.access_token,
        },
      });
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      localStorage.setItem('role', data.role_name);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async ({
    userName, password, firstName, lastName,
  }) => {
    try {
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
      return data;
    } catch (e) {
      return e.response.data;
    }
  },
);

export const signInUser = createAsyncThunk(
  'user/SignIn',
  async (dataUser, { dispatch }) => {
    const { userName, password } = dataUser;
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
      dispatch(getUserProfile());
      return data;
    } catch (e) {
      return e;
    }
  },
);

export const getRefreshToken = createAsyncThunk(
  'auth/getRefreshToken',
  async () => {
    const token = JSON.parse(localStorage.getItem('userAuth'));
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

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    status: '',
    error: '',
    role: '',
    auth: !!localStorage.getItem(storageUser),
  },
  reducers: {
  },
  extraReducers: {
    [signUpUser.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [signUpUser.fulfilled]: (state, action) => {
      const {
        firstName, lastName, userName, password,
      } = action.payload;
      state.status = 'resolved';
      state.firstName = firstName;
      state.lastName = lastName;
      state.username = userName;
      state.password = password;
      state.auth = true;
    },
    [signUpUser.rejected]: (state) => {
      state.status = 'error';
    },
    [signInUser.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [signInUser.fulfilled]: (state, action) => {
      const {
        userName, password,
      } = action.payload;
      state.status = 'resolved';
      state.username = userName;
      state.password = password;
      state.auth = true;
    },
    [signInUser.rejected]: (state) => {
      state.status = 'error';
    },
    [getUserProfile.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getUserProfile.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.userProfile = action.payload;
    },
    [getUserProfile.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [getRefreshToken.pending]: (state) => {
      state.status = 'loading';
    },
    [getRefreshToken.fulfilled]: (state) => {
      state.status = 'resolved';
    },
    [getRefreshToken.rejected]: (state) => {
      state.status = 'error';
    },
  },
});
export const userSelector = (state) => state.user;

export default userSlice.reducer;
