import { createContext, useEffect, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { title: "A", state: "Pending", id: 1 },
    { title: "B", state: "Pending", id: 2 },
  ]);

  useEffect(() => {
    let taskList = window.localStorage.getItem("taskList");
    if (taskList) {
      setTasks(JSON.parse(taskList));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    let taskList = [...tasks];
    let taskId = tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1;
    taskList.push({
      title,
      state: "Pending",
      id: taskId,
    });
    setTasks(taskList);
  }

  function removeTask(taskId) {
    let taskList = tasks.filter((task) => task.id != taskId);
    setTasks(taskList);
  }

  const contextValues = { tasks, addTask, removeTask };

  return (
    <TaskContext.Provider value={contextValues}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
