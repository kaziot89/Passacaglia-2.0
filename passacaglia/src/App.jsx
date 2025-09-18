import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Misja from "./pages/Misja";
import Zespol from "./pages/Zespol";
import Media from "./pages/Media";
import Projekty from "./pages/Projekty"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/misja" element={<Misja />} />
        <Route path="/zespol" element={<Zespol />} />
        <Route path="/media" element={<Media />} />
        <Route path="projekty" element={<Projekty />} />
      </Routes>
    </Router>
  );
}

export default App;
