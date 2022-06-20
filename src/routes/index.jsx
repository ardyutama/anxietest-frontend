import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing-page";
import TestPage from "../pages/test-page";
import Quiz from "../components/Quiz";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/coba" element={<Quiz />} />
    </Routes>
  );
}

export default Router;