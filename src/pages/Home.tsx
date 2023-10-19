import { useMediaQuery } from "@mui/material";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Home() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <TaskInput />
      {(matches && (
        <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
          <TaskList filter="Pendiente" />
          <TaskList filter="En progreso" />
          <TaskList filter="Terminada" />
        </div>
      )) || (
        <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
          <TaskList />
        </div>
      )}
    </>
  );
}

export default Home;
