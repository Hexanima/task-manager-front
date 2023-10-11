import { useContext } from "react"
import { TaskContext } from "../context/TaskProvider"

function useTask() {
    return useContext(TaskContext);
}

export default useTask;