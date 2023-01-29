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
        <div className="w-full max-w-[100%] lg:max-w-[1280px] xl:max-w-[1280px] px-[15px] lg:px-[60px] xl:px-[60px] mx-auto">
          <RoutesMain />
        </div>
      </div>
    </Router>
  );
};

export default App;
