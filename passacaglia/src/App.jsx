import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Misja from "./pages/Misja";
import Zespol from "./pages/Zespol";
import Media from "./pages/Media";
import Projekty from "./pages/Projekty";
import ProjektyDetails from "./pages/ProjektyDetails";
import Aktualnosci from "./pages/Aktualnosci";
import Wesprzyj from "./pages/Wesprzyj";
import Kontakt from "./pages/Kontakt";
import ScrollToTop from "./components/ScrollToTop";
import News_page from "./pages/News_page";

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
        <Route path="/projekty/:slug" element={<ProjektyDetails />} />
        <Route path="aktualnosci" element={<Aktualnosci />} />
        <Route path="wesprzyj" element={<Wesprzyj />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="/aktualnosci/:id" element={<News_page />} />
      </Routes>
    </Router>
  );
}

export default App;
