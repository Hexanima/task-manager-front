import { useState } from "react";
import Layout from "./layout";
import "./App.css";
import TaskCard from "./components/TaskCard";
import { TaskProvider } from "./context/TaskProvider";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TaskProvider>
      <Layout>
        <Home />
      </Layout>
    </TaskProvider>
  );
}

export default App;
