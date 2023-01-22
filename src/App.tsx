import Global from "./styles/global";
import React from "react";
import Menu from "./components/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesMain from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Menu />
        <Global />
        <div className="w-full max-w-[1280px] pl-[60px] pr-[60px] mx-auto">
          <RoutesMain />
        </div>
      </div>
    </Router>
  );
};

export default App;
