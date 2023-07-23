import { Routes, Route } from "react-router-dom";
import { Details } from "../pages/Details";
import { New } from "../pages/New";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/details" element={<Details />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}
