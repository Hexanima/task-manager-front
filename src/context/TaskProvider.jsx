import { createContext, useEffect, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const taskList = window.localStorage.getItem("taskList");
  const [tasks, setTasks] = useState({})

  useEffect(() => {

  }, []);
  const contextValues = { hello: "Hola" };

  return (
    <TaskContext.Provider value={contextValues}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
