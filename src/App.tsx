import Layout from "./layout";
import "./App.css";
import { TaskProvider } from "./context/TaskProvider";
import Home from "./pages/Home";

function App() {

  return (
    <TaskProvider>
      <Layout>
        <Home />
      </Layout>
    </TaskProvider>
  );
}

export default App;
