import { InitialState } from "../types/redux";
import { FiltersInitialState } from "../types/task";

export const getTheme = (state: InitialState) => state.theme;
export const getLang = (state: InitialState) => state.lang;
export const getTask = (state: InitialState) => state.tasks;
export const getStatus = (state: InitialState) => state.filters.status;
