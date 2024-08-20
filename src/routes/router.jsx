import { Routes, Route } from "react-router-dom";
import Drawer from "../components/Pages/Drawer";
import PizzaList from "../components/PizzaList";
import Category from "../components/Category";
import Sort from "../components/Sort";
function MainPage() {
  return (
    <div>
      <div className="flex items-center justify-between mt-10">
        <Category />
        <Sort />
      </div>
      <PizzaList/>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/drawer" element={<Drawer />} />
    </Routes>
  );
}

export default AppRoutes;
