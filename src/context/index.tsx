import React from "react";
import { CommerceProvider } from "./commerce";

const AppProvider: React.FC<ChildrenProps> = ({ children }) => {
  return <CommerceProvider>{children}</CommerceProvider>;
};

export default AppProvider;

interface ChildrenProps {
  children: React.ReactNode;
}
