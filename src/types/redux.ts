import { FiltersInitialState, Task } from "./task";

export type InitialAppState = {
  lang: string;
  theme: string;
};

export type Action = {
  type: string;
  payload: string;
};



export type InitialState = {
  theme: any;
  lang: any;
  appInfo: InitialAppState;
  tasks: Task[];
  filters: FiltersInitialState;
};
