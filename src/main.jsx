import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./router";
import "./index.css";

import { AuthProvider } from "./hooks/auth";
import { CartProvider } from "./hooks/cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);
