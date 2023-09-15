import Global from "./styles/global";
import React from "react";
import Menu from "./components/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesMain from "./routes";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Menu />
        <Global />
        <div className="w-full px-5 lg:px-0 lg:pl-5">
          <RoutesMain />
        </div>
      </div>
    </Router>
  );
};

export default App;
