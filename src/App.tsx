import Global from "./styles/global";
import React from "react";
import Menu from "./components/Menu";
import { BrowserRouter as Router} from "react-router-dom";
import RoutesMain from "./routes";


const App: React.FC = () => {
  return (
    <Router>
      <RoutesMain />
      <div className="flex">
        <Menu />
        <Global />
      </div>
    </Router>
  );
};

export default App;
