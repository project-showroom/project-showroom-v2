import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from 'cookies-next';

import { IAddProjectFormValues } from '../../../types/element-types/form-elements-types';

const token = getCookie('token');

export const createProject = createAsyncThunk(
  'project/postProject',
  async (value: IAddProjectFormValues) => {
    if (!token) return;
    return await axios.post(`/api/projects`, value);
  },
);
