import Layout from "./layout";
import "./App.css";
import { TaskProvider } from "./context/TaskProvider";
import Home from "./pages/Home";
import { PopupProvider } from "./context/PopupProvider";

function App() {
  return (
    <PopupProvider>
      <TaskProvider>
        <Layout>
          <Home />
        </Layout>
      </TaskProvider>
    </PopupProvider>
  );
}

export default App;
