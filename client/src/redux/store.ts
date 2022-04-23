import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import appApi from "../services/appApi";

// persist our store
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";

const persistConfig = {
  key: "mern-chat",
  storage,
  blacklist: [appApi.reducerPath],
};

// reducers
const reducer = combineReducers({
  user: userReducer,
  [appApi.reducerPath]: appApi.reducer,
});

// persist reducers
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([appApi.middleware]),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
