import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IAddProjectFormValues } from '../../../types/element-types/form-elements-types';

export const updateProject = createAsyncThunk(
  'projects/put/[cardid]',
  async (data: {
    values?: IAddProjectFormValues;
    cardid?: string | string[];
  }) => {
    const { values, cardid } = data;
    if (!cardid) return;
    return await axios.put(
      `/api/projects/edit-project/${cardid}`,
      { data: { ...values } },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  },
);
