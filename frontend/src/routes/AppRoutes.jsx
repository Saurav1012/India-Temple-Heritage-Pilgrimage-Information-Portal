import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import TempleList from "../pages/TempleList/TempleList";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temples" element={<TempleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;