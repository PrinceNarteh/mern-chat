import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_BASE_URL,
  }),
  endpoints: (builder) => ({
    //   registering the user
    registerUser: builder.mutation({
      query: (user) => ({
        url: "auth/register",
        method: "POST",
        body: user,
      }),
    }),

    // logging the user in
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
    }),

    // logging the user out
    logoutUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/logout",
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
} = appApi;

export default appApi;
