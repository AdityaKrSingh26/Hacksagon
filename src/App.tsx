import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import About from "./Pages/About/About"; // Example: Add an About page
import Sponsors from "./Pages/Sponsor/Sponsor";
import Contact from "./Pages/Contact/Contact"
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Footer } from "./components/Footer";
import Themes from "./Pages/Themes/Themes";
import Schedule from "./Pages/Schedule/Schedule"

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 relative text-white min-w-96">
      <Background />
      <Router>
        <div className="app flex flex-col min-h-screen relative">
          <Navbar />
          <div className="content flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/themes" element={<Themes />} />
              <Route path="/schedule" element={<Schedule/>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
