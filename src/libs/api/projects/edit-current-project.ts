import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const token = getCookie('token');

export const editCurrentProject = createAsyncThunk(
  'projects/edit-project/[cardid]',
  async (cardid: string | string[]) => {
    if (!token) return;
    return await axios
      .get(`/api/projects/edit-project/${cardid}`)
      .then((response) => {
        return response.data.data[0];
      });
  },
);
