import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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

interface IInitialState {
  loading: boolean;
  searchProfile: any;
  error: string;
}
const initialState: IInitialState = {
  loading: false,
  searchProfile: [],
  error: '',
};

const searchProfileSlice: any = createSlice({
  name: 'searchProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSearchProfile.fulfilled,
      (state, action: PayloadAction) => {
        state.loading = false;
        state.searchProfile = action.payload;
        state.error = '';
      },
    );
    builder.addCase(getSearchProfile.rejected, (state, action) => {
      state.loading = false;
      state.searchProfile = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default searchProfileSlice.reducer;
