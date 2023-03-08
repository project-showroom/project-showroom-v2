import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk(
  'user/fetchUsers',
  async (userId: string | undefined) => {
    if (!userId) return;
    return await axios.get(`/api/users/${userId}`).then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data.data));
      return response.data.data;
    });
  },
);
