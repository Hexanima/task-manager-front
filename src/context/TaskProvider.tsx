import { createContext, useEffect, useState } from "react";

const TaskContext = createContext({} as TaskObject);

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem("taskList") || "[]") as Task[]);

  useEffect(() => {
    window.localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title: string) {
    const taskList = [...tasks];
    const taskId = tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1;
    taskList.push({
      title,
      state: "Pendiente",
      id: taskId,
    });
    setTasks(taskList);
  }

  function removeTask(taskId: number) {
    const taskList = tasks.filter((task) => task.id != taskId);
    setTasks(taskList);
  }

  function changeState(taskId: number, state: TaskState) {
    const taskList = tasks.map((task) => {
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
