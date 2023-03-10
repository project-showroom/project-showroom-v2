import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (cardid: string) => {
    return await axios
      .delete(`/api/projects/delete-project/${cardid}`)
      .then((response) => {
        return response.data.data;
      });
  },
);
