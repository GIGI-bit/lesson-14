import { createReducer } from "@reduxjs/toolkit";
import { Action, InitialAppState, InitialState } from "../types/redux";
import { FiltersInitialState, Status, Task } from "../types/task";
import { combineReducers } from "redux";
import {
  changeFilterStatus,
  changeLanguage,
  changeTask,
  changeTheme,
} from "./actions";

const initialAppState: InitialAppState = {
  lang: "az",
  theme: "light",
};

export const appReducer = createReducer(initialAppState, (builder) => {
  builder
    .addCase(changeLanguage, (state, action) => {
      return {
        ...state,
        lang: action.payload,
      };
    })
    .addCase(changeTheme, (state, action) => {
      return {
        ...state,
        theme: action.payload,
      };
    });
});

// export const filterReducer = (state = filterInitialState, action: Action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// };

const tasksInitialState: Task[] = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

// export const taskReducer = (state = tasksInitialState, action: Action) => {
//   switch (action.type) {
//     case :
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };

export const taskReducer = createReducer(tasksInitialState, (builder) => {
  builder.addCase(changeTask, (state, action) => {
    return { ...state, task: action.payload };
  });
});

const filterInitialState: FiltersInitialState = {
  status: "all",
};

export const filterReducer = createReducer(filterInitialState, (builder) => {
  builder.addCase(changeFilterStatus, (state, action) => {
    return { ...state, status: action.payload };
  });
});

export const rootReducer = (
  state: InitialState | undefined,
  action: Action
) => {
  return {
    appInfo: appReducer(state?.appInfo, action),
    tasks: taskReducer(state?.tasks, action),
    filters: filterReducer(state?.filters, action),
  };
};

// export const rootReducer = combineReducers({
//   appInfo: appReducer,
//   tasks: taskReducer,
//   filters: filterReducer,
// });
