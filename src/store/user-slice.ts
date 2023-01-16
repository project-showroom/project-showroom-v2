import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import convertTokenId from '../utils/convert-token-id';

// let userData: any;

const token = getCookie('token');
const userId = convertTokenId(token);

// export const fetchUser = async () => {
//   const res = await fetch(`http://localhost:3000/api/users/${userId}`);
//   const data = await res.json();
//   userData = data.data;
//   return data.data;
// };

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  if (!userId) return;
  return axios
    .get(`http://localhost:3000/api/users/${userId}`)
    .then((response) => {
      return response.data.data;
    });
});

interface IInitialState {
  loading: boolean;
  user: any;
  error: any;
}
const initialState: IInitialState = {
  loading: false,
  user: [],
  error: '',
};

const userSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // getUser: (state) => {
    //   state.loading = true;
    //   state.user = userData;
    // },
    clearUser: (state) => {
      state.loading = false;
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const { getUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
