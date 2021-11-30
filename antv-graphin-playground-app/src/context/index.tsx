import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Router>{children}</Router>
    </>
  );
};

export { AppProviders };
