import { configureStore } from '@reduxjs/toolkit';

import iconSlice from './icon-slice';

const store = configureStore({
  reducer: {
    icon: iconSlice.reducer,
  },
});

export default store;
