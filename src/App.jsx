import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ClientTrustBar from './components/ClientTrustBar';
import ProductsPage from './components/ProductsPage';
import CompanyIntro from './components/CompanyIntro';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <HeroCarousel />
      <ClientTrustBar />
      <CompanyIntro />

      <ProductsPage />

      <section className="bg-slate-100 py-20">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform?</h2>
            <p className="mb-8 text-slate-600">Join thousands of satisfied users today.</p>
         </div>
      </section>
      
      <div className="h-[50vh]"></div> {/* Extra space to ensure scrolling */}
    </div>
  );
}

export default App;
