import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import ServicesPage from './components/ServicesPage';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import GlobalFooter from './components/GlobalFooter';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <GlobalFooter />
      <Chatbot />
    </div>
  );
}

export default App;
