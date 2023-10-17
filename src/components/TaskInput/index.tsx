import { useRef } from "react";
import useTask from "../../hooks/useTasks";
import styles from "./taskinput.module.css";
import AddIcon from "@mui/icons-material/Add";
import usePopup from "../../hooks/usePopup";

function TaskInput() {
  const { showAlert } = usePopup();
  const { addTask } = useTask();
  const titleInput = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = titleInput.current?.value;
    if (titleInput.current && title) {
      addTask(title);
      titleInput.current.value = "";
    } else {
      showAlert("Ingrese un titulo para su tarea", "error");
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
