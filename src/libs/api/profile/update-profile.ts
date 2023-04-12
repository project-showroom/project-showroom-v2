import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import { IProfileType } from '../../../types/api-types';

export const postAndUpdateProfile = createAsyncThunk(
  'profile/putProfile',
  async (values: IProfileType) => {
    return await axios
      .put(
        `/api/profiles`,
        { data: values },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((res) => toast(res.data.message));
  },
);
