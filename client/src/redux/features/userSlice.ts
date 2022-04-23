import {createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import appApi from "../../services/appApi";
import {AppDispatch, RootState} from "../store";

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
      (_state, {payload}) => payload
    );

    // save the user after login
    builder.addMatcher(
      appApi.endpoints.loginUser.matchFulfilled,
      (_state, {payload}) => payload
    );

    // logout: destroy user session
    builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, () => {});
  },
});

export const useAddNotifications = () => {
  const dispatch = useDispatch<AppDispatch>();
  return dispatch(userSlice.actions.addNotifications);
};

export const useResetNotifications = () => {
  const dispatch = useDispatch<AppDispatch>();
  return dispatch(userSlice.actions.resetNotifications);
};

export const selectUser = () => (state: RootState) => state.user;

export default userSlice.reducer;
