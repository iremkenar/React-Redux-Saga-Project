import { createSelector } from "reselect";

export const globalUserState = (state) => state.user;

export const getUserDataSelector = createSelector(
  globalUserState,
  (user) => user.data
);

export const getUserLoadedSelector = createSelector(
  globalUserState,
  (user) => user.loaded
);
