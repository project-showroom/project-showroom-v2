import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (cardid: string) => {
    return await axios
      .delete(`/api/projects/delete-project/${cardid}`)
      .then((response) => {
        return response.data.data;
      })
      .then((res) => toast(res.data.message));
  },
);
