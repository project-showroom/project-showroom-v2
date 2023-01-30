import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrentProfile = createAsyncThunk(
  'profile/getCurrentProfile',
  async () => {
    return await axios.get(`/api/profiles`).then((response) => {
      return response.data.data;
    });
  },
);
