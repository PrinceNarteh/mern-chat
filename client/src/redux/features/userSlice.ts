import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appApi from "../../services/appApi";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addNotifications: (state, payload) => {},
    resetNotifications: (state, payload) => {},
  },
  extraReducers: (builder) => {
    // save the user after register
    builder.addMatcher(
      appApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => payload
    );

    // save the user after login
    builder.addMatcher(
      appApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => payload
    );

    // logout: destroy user session
    builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, () => null);
  },
});

export const useAddNotifications = () => {
  const dispatch = useDispatch();
  return dispatch(userSlice.actions.addNotifications);
};

export const useResetNotifications = () => {
  const dispatch = useDispatch();
  return dispatch(userSlice.actions.resetNotifications);
};

export default userSlice.reducer;
