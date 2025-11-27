import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-slate-900 font-bold text-xl">
             DL
           </div>
           <div className="text-xl font-bold tracking-wide text-white">
             贷略<span className="text-gold-500">研习社</span>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">首页</a>
          <a href="#why-us" className="text-gray-300 hover:text-white transition-colors">为什么选我们</a>
          <a href="#consultation" className="text-gray-300 hover:text-white transition-colors">AI 诊断</a>
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="px-6 py-2 bg-white/10 hover:bg-gold-500 hover:text-white text-white border border-white/20 hover:border-transparent rounded-full transition-all duration-300"
          >
            联系我们
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-white/10 p-6 flex flex-col space-y-4 shadow-xl">
          <a href="#" className="text-gray-300 hover:text-gold-500" onClick={() => setIsMobileMenuOpen(false)}>首页</a>
          <a href="#why-us" className="text-gray-300 hover:text-gold-500" onClick={() => setIsMobileMenuOpen(false)}>为什么选我们</a>
          <a href="#consultation" className="text-gray-300 hover:text-gold-500" onClick={() => setIsMobileMenuOpen(false)}>AI 诊断</a>
          <button 
            onClick={() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
            }}
            className="text-gold-500 font-bold text-left"
          >
            联系我们
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;