import { configureStore } from '@reduxjs/toolkit';

import darkModeSlice from './dark-mode-slice';
import iconSlice from './icon-slice';

const store = configureStore({
  reducer: {
    icon: iconSlice.reducer,
    darkMode: darkModeSlice.reducer,
  },
});

export default store;
