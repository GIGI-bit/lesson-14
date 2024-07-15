export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type FiltersInitialState = {
  status: Status;
};

export type Status = "completed" | "uncompleted" | "all";
export type TaskInitialState={
  tasks:Task[]
}
