import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigure = {
  key: "wpheadless",
  storage,
  whitelist: [
    "authSlice",
    // "persist/PERSIST",
  ],
};

const rootReducer = combineReducers({
  authSlice: authSlice,
});

const persistedReducer = persistReducer(persistConfigure, rootReducer);

export default persistedReducer;

// export const store = configureStore({
//   reducer: {
//     auth: persistAuthReducer,
//   },
// });

// export const peristedStore = persistStore(store);
