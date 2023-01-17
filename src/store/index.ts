import { configureStore } from '@reduxjs/toolkit';

import iconSlice from './icon-slice';
import projectSlice from './project-slice';
import takeProjectsSlice from './take-projects-slice';
import takeUserSlice from './take-user-slice';

const store = configureStore({
  reducer: {
    icon: iconSlice.reducer,
    user: takeUserSlice,
    project: projectSlice,
    projects: takeProjectsSlice,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
