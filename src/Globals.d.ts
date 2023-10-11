declare module "*.module.css"

type TaskState = "Pendiente" | "En progreso" | "Terminada"

interface Task {
    title: string,
    state: TaskState,
    id: number
}

interface TaskObject {
    tasks: Task[];
    addTask: (title: string) => void;
    removeTask: (taskId: number) => void;
    changeState: (taskId: number, state: TaskState) => void;
  }