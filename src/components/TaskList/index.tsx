import TaskCard from "../../components/TaskCard";
import useTask from "../../hooks/useTasks";
import styles from "./tasklist.module.css";

import { Task, TaskState } from "../../Globals";

function TaskList({ filter }: { filter?: TaskState }) {
  const { tasks } = useTask();
  let filtered = tasks;

  if (filter) {
    filtered = tasks.filter((task) => task.state === filter);
  }

  return (
    <>
      {filtered.length > 0 && (
        <div className={styles.list}>
          {filtered.map((task: Task) => (
            <TaskCard
              title={task.title}
              state={task.state}
              id={task.id}
              key={task.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default TaskList;
