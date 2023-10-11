import styles from "./taskcard.module.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import useTask from "../../hooks/useTasks";

function TaskCard({ title, state, id }: Task) {
  const { removeTask, changeState } = useTask();

  function handleChange() {
    if (state === "Pendiente") {
      changeState(id, "En progreso");
    } else {
      changeState(id, "Pendiente");
    }
  }

  let color = state === "Pendiente" ? "goldenrod" : "green";

  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.state} style={{ color }}>
          <span className={styles.dot} style={{ borderColor: color }}></span>
          {state}
        </p>
      </div>
      <div className={styles.actions}>
        <button>
          <DeleteIcon onClick={() => removeTask(id)} />
        </button>
        <button>
          <AutorenewIcon onClick={handleChange} />
        </button>
      </div>
    </article>
  );
}

export default TaskCard;
