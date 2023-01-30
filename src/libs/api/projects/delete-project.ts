import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  (cardid: string) => {
    return axios.delete(`/api/projects/delete-project/${cardid}`);
  },
);
