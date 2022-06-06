import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing-page";
import TestPage from "../pages/test-page";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default Router;