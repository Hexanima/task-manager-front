import styles from "./taskcard.module.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeleteIcon from "@mui/icons-material/Delete";
import useTask from "../../hooks/useTasks";
import { useState } from "react";
import { Task, TaskState } from "../../Globals";

function TaskModal({
  modalState,
  taskState,
  id,
  onModal,
}: {
  modalState: boolean;
  taskState: TaskState;
  id: number;
  onModal: any;
}) {
  const { changeState } = useTask();
  const tasks: TaskState[] = ["Pendiente", "En progreso", "Terminada"];
  function handleChange(state: TaskState) {
    changeState(id, state);
  }

  return (
    <>
      {modalState && (
        <div className={styles.modal}>
          {tasks.map((task) => {
            return task !== taskState ? (
              <button
                onClick={() => {
                  onModal();
                  handleChange(task);
                }}
              >
                {task}
              </button>
            ) : (
              false
            );
          })}
        </div>
      )}
    </>
  );
}

function TaskCard({ title, state, id }: Task) {
  const { removeTask } = useTask();
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }

  const color =
    state === "Pendiente"
      ? "red"
      : state === "En progreso"
      ? "goldenrod"
      : "green";

  return (
    <article className={styles.card}>
      <TaskModal
        modalState={modal}
        id={id}
        taskState={state}
        onModal={handleModal}
      />
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
          <AutorenewIcon onClick={handleModal} />
        </button>
      </div>
    </article>
  );
}

export default TaskCard;
