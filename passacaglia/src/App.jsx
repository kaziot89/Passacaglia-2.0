import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Misja from "./pages/Misja";
import Zespol from "./pages/Zespol";
import Media from "./pages/Media";
import Projekty from "./pages/Projekty";
import Aktualnosci from "./pages/Aktualnosci";
import Wesprzyj from "./pages/Wesprzyj";
import Kontakt from "./pages/Kontakt";
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
        <Route path="aktualnosci" element={<Aktualnosci />} />
        <Route path="wesprzyj" element={<Wesprzyj />} />
        <Route path="kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;
