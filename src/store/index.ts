import { configureStore } from '@reduxjs/toolkit';

import deleteProjectSlice from './delete-project-slice';
import editProjectSlice from './edit-project-slice';
import projectSlice from './project-slice';
import searchProfileSlice from './search-profile-slice';
import takeProfileSlice from './take-profile-slice';
import takeProjectsSlice from './take-projects-slice';
import takeUserSlice from './take-user-slice';
import updateProfileSlice from './update-profile-slice';
import updateProjectSlice from './update-project-slice';

const store = configureStore({
  reducer: {
    user: takeUserSlice,
    project: projectSlice,
    projects: takeProjectsSlice,
    editProject: editProjectSlice,
    updateProject: updateProjectSlice,
    updateProfile: updateProfileSlice,
    profile: takeProfileSlice,
    searchProfile: searchProfileSlice,
    leftProjectsAfterDeleted: deleteProjectSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
