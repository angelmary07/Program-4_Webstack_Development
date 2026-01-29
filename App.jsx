// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Complaints from './pages/Complaints';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Login from './pages/Login';
import Stats from './pages/Stats';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // optional global styles

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<Home />} /> {/* fallback */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
