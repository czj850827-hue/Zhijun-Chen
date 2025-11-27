import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIDiagnosis from './components/AIDiagnosis';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AIDiagnosis />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;