import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Common/Header';
import Footer from './Common/Footer';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Single from './Pages/Single';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="single" element={<Single />} />
 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
