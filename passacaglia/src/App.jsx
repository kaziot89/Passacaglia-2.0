import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Misja from "./pages/Misja";
import Zespol from "./pages/Zespol";
import Media from "./pages/Media";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/misja" element={<Misja />} />
        <Route path="/zespol" element={<Zespol />} />
        <Route path="/media" element={<Zespol />} />
      </Routes>
    </Router>
  );
}

export default App;
