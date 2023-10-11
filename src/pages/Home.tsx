import TaskCard from "../components/TaskCard";
import useTask from "../hooks/useTasks";
import TaskInput from "../components/TaskInput";

function Home() {
  const { tasks } = useTask();

  return (
    <>
      <TaskInput />
      {tasks &&
        tasks.map((task : Task) => (
          <TaskCard title={task.title} state={task.state} id={task.id} key={task.id}/>
        ))}
    </>
  );
}

export default Home;
