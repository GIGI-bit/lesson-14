// const action = {
//   type: "Action type",
//   payload: "Payload value",
// };

import { createAction } from "@reduxjs/toolkit";
import { Status } from "../types/task";

// const changeLanguage = {
//   type: "lang/change",
//   payload: "en",
// };

type language = "az" | "en" | "ru";
export const changeLanguage = createAction("lang/change");

export const changeTheme = createAction("theme/change");

export const changeFilterStatus = createAction("filters/setStatusFilter");
export const changeTask = createAction("tasks/addTask");
