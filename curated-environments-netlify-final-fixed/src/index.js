
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage";
import ThankYou from "./ThankYou";

const path = window.location.pathname;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {path === "/thank-you" ? <ThankYou /> : <HomePage />}
  </React.StrictMode>
);
