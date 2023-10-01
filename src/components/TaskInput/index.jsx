import { useRef } from "react";
import useTask from "../../hooks/useTasks";
import styles from "./taskinput.module.css";
import AddIcon from "@mui/icons-material/Add"

function TaskInput() {
  const { addTask } = useTask();
  const titleInput = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    let title = titleInput.current.value;
    if (title) {
        addTask(title);
        titleInput.current.value = ""
    } else {
        window.alert("Please enter a title for the task");
    }
  }

  return (
    <form className={styles.taskInput} onSubmit={handleSubmit}>
      <input type="text" ref={titleInput} />
      <button><AddIcon/></button>
    </form>
  );
}

export default TaskInput;
