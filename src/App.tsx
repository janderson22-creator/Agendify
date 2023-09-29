import Global from "./styles/global";
import React from "react";
import Menu from "./components/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesMain from "./routes";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const App: React.FC = () => {
  return (
    <Router>
      <Global />
      <Menu />
      <div className="max-w-[1280px] mx-auto w-full px-5 lg:px-5">
        <RoutesMain />
      </div>
    </Router>
  );
};

export default App;
