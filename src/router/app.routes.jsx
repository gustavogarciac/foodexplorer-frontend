import { Routes, Route } from "react-router-dom";
import { Details } from "../pages/Details";
import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}
