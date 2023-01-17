import Global from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";

function App() {
  return (
    <Router>
      <div>
        <Global />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
