import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProjects = createAsyncThunk(
  'projects/getAllProjects',
  async (username: string | string[]) => {
    return await axios.get(`/api/projects/${username}`).then((response) => {
      return response.data.data;
    });
  },
);
