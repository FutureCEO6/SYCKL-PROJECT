import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Education from "./pages/Education";
import CrisisGuide from "./pages/CrisisGuide";
import Affirmations from "./pages/Affirmations";
import SelfCare from "./pages/SelfCare";
import Stories from "./pages/Stories";

function App() {
  return (
    <Router>
      <Navbar/>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/crisis-guide" element={<CrisisGuide/>} />
          <Route path="/affirmations" element={<Affirmations/>} />
          <Route path="/self-care" element={<SelfCare/>} />
          <Route path="/stories" element={<Stories/>} />
        </Routes>
      </main>

      <Footer/>
    </Router>
  );
}

export default App;