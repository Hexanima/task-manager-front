import styles from "./taskcard.module.css";

function TaskCard() {
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <p className={styles.title}>Study React</p>
        <p className={styles.state} style={{ color: "goldenrod" }}>
          <div
            className={styles.dot}
            style={{ borderColor: "goldenrod" }}
          ></div>
          Pending
        </p>
      </div>
      <div className={styles.actions}>
        <button>Remove</button>
        <button>Change</button>
      </div>
    </article>
  );
}

export default TaskCard;
