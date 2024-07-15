import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { appReducer, filterReducer, rootReducer, taskReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    apps: appReducer,
    tasks: taskReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
