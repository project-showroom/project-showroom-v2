import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IProfileType } from '../../../types/api-types';

export const postAndUpdateProfile = createAsyncThunk(
  'profile/putProfile',
  async (values: IProfileType) => {
    return await axios.put(
      `/api/profiles`,
      { data: values },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  },
);
