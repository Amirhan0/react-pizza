import { Routes, Route } from "react-router-dom";
import Drawer from "../components/Pages/Drawer";
import MainPage from "../components/Pages/Home";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/drawer" element={<Drawer />} />
    </Routes>
  );
}

export default AppRoutes;
