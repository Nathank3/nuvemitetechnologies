import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ClientTrustBar from './components/ClientTrustBar';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <HeroCarousel />
      <ClientTrustBar />

      {/* Dummy Content for Scroll */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-nuvemite-blue">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-nuvemite-cyan/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-nuvemite-cyan rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Feature {item}</h3>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>

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
