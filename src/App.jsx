import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServicesPage from './components/ServicesPage';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import GlobalFooter from './components/GlobalFooter';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <GlobalFooter />
    </div>
  );
}

export default App;
