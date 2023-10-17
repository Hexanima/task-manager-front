import { AlertColor } from "@mui/material/Alert";

declare module "*.module.css";

type TaskState = "Pendiente" | "En progreso" | "Terminada";

interface Task {
  title: string;
  state: TaskState;
  id: number;
  description?: string;
}

interface TaskObject {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (taskId: number) => void;
  changeState: (taskId: number, state: TaskState) => void;
}

interface AlertMsg {
  msg: string;
  show: boolean;
  type: AlertColor;
}

interface PopupObject {
  alert: AlertMsg;
  showAlert: (msg: string, type: AlertColor) => void;
}
