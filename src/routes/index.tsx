import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Schedules from "../pages/Schedules";
import Services from "../pages/Services";
import Establishment from "../pages/establishment";

const RoutesMain: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:nameStablishment/:id" element={<Establishment />} />
      <Route path="/:nameStablishment/:id/schedules" element={<Schedules />} />
      <Route path="/:nameStablishment/:id/products" element={<Products />} />
      <Route path="/:nameStablishment/:id/services" element={<Services />} />
    </Routes>
  );
};

export default RoutesMain;
