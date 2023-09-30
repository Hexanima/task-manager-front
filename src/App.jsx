import { useState } from "react";
import Layout from "./layout";
import "./App.css";
import TaskCard from "./components/TaskCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <TaskCard />
    </Layout>
  );
}

export default App;
