import styles from "./taskcard.module.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import useTask from "../../hooks/useTasks";

function TaskCard({ title, state, id }) {
  const {removeTask} = useTask();
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.state} style={{ color: "goldenrod" }}>
          <span
            className={styles.dot}
            style={{ borderColor: "goldenrod" }}
          ></span>
          {state}
        </p>
      </div>
      <div className={styles.actions}>
        <button>
          <DeleteIcon onClick={() => removeTask(id)} />
        </button>
        <button>
          <AutorenewIcon />
        </button>
      </div>
    </article>
  );
}

export default TaskCard;
