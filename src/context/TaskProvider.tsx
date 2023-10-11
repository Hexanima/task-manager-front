import { createContext, useEffect, useState } from "react";

const TaskContext = createContext({} as TaskObject);

const TaskProvider = ({ children }: { children: any }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    let taskList = window.localStorage.getItem("taskList");
    if (taskList) {
      setTasks(JSON.parse(taskList));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title: string) {
    let taskList = [...tasks];
    let taskId = tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1;
    taskList.push({
      title,
      state: "Pendiente",
      id: taskId,
    });
    setTasks(taskList);
  }

  function removeTask(taskId: number) {
    let taskList = tasks.filter((task) => task.id != taskId);
    setTasks(taskList);
  }

  function changeState(taskId: number, state: TaskState) {
    let taskList = tasks.map((task) => {
      return task.id === taskId ? { ...task, state } : task;
    });
    setTasks(taskList);
  }

  const contextValues = { tasks, addTask, removeTask, changeState };

  return (
    <TaskContext.Provider value={contextValues}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
