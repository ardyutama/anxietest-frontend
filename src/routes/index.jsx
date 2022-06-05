import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing-page";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default Router;