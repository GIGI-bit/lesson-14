import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getLang, getStatus, getTask, getTheme } from "./redux/selectors";
import {
  changeFilterStatus,
  changeLanguage,
  changeTheme,
} from "./redux/actions";
import { Status, Task } from "./types/task";
import { filterReducer } from "./redux/reducer";

function App() {
  // const theme = useSelector((state: InitialState) => state.theme);
  const theme = useSelector(getTheme);
  const lang = useSelector(getLang);
  const dispatch = useDispatch();
  const tasks = useSelector(getTask);
  const status = useSelector(getStatus);

  const handleSwitchTheme = () => {
    dispatch(changeTheme());
  };
  const handleSwitchLang = () => {
    dispatch(changeLanguage());
  };

  const counter = (status: boolean) => {
    let count = 0;
    tasks.forEach((element) => {
      if (element.completed === status) count = count + 1;
    });
    return count;
  };

  function handleAllButton(): void {
    dispatch(changeFilterStatus("all"));
    console.log(status);
  }
  function handleActiveButton(): void {
    dispatch(changeFilterStatus("uncompleted"));
    console.log(status);
  }

  function handleCompletedButton(): void {
    dispatch(changeFilterStatus("completed"));
    console.log(status);
  }
  const getVisibleTasks = (tasks: Task[], statusFilter: Status) => {
    switch (statusFilter) {
      case "uncompleted":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };
  const visibleTasks = getVisibleTasks(tasks, status);
  return (
    <div
      style={{
        backgroundColor: theme === "dart" ? "black" : "white",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1
        style={{
          color: theme !== "dart" ? "black" : "blue",
        }}
      >
        Selected Theme - {theme}
      </h1>
      <h2>Selected language - {lang}</h2>

      <button onClick={handleSwitchLang}>Swith lang</button>
      <button onClick={handleSwitchTheme}>Swith theme</button>

      <div className="tasks-container">
        <div className="text-button-container">
          <p className="tasks-text">Tasks</p>
          <p>Active:{counter(false)}</p>
          <p>Completed: {counter(true)}</p>
        </div>
        <div>
          <p>Filter by status</p>
          <div>
            <button onClick={handleAllButton}>All</button>
            <button onClick={handleActiveButton}>Active</button>
            <button onClick={handleCompletedButton}>Completed</button>
          </div>
        </div>
      </div>

      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
