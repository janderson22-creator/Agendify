import Global from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div className="flex">
        <Menu />
        {/* <Routes /> */}
      </div>
    </Router>
  );
}

export default App;
