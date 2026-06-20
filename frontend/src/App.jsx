import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import TempleList from "./pages/templelist/templelist";

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