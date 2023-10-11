import { useRef } from "react";
import useTask from "../../hooks/useTasks";
import styles from "./taskinput.module.css";
import AddIcon from "@mui/icons-material/Add";

function TaskInput() {
  const { addTask } = useTask();
  const titleInput = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let title = titleInput.current?.value;
    if (titleInput.current && title) {
      addTask(title);
      titleInput.current.value = "";
    } else {
      window.alert("Ingrese un titulo para su tarea");
    }
  }

  return (
    <form className={styles.taskInput} onSubmit={handleSubmit}>
      <input type="text" placeholder="Titulo de tarea" ref={titleInput} />
      <button>
        <AddIcon />
      </button>
    </form>
  );
}

export default TaskInput;
