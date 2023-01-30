import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSearchProfile = createAsyncThunk(
  'profile/getSearchProfile',
  async (username?: string | string[]) => {
    return await axios
      .get(`/api/profiles/reach-user-profile/${username}`)
      .then((response) => {
        return response.data.data;
      });
  },
);
