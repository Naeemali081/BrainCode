import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactModal } from './ContactModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const menuItems = ['Home', 'Services', 'Technologies', 'Portfolio', 'About', 'Contact'];

  const handleNavClick = (item: string) => {
    if (item === 'Contact') {
      setIsContactModalOpen(true);
      setIsMenuOpen(false);
      return;
    }
    
    const targetId = item.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-gradient-to-br rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
              <img src="https://braincode360.netlify.app/smallLogo.png" alt="" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-white tracking-tight whitespace-nowrap">BrainCode 360</span>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            <nav className="flex items-center gap-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-slate-300 bg-transparent hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 rounded-full px-8"
              onClick={() => setIsContactModalOpen(true)}
            >
              Start a Project
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 space-y-4 border-t border-slate-800 pt-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium w-full text-left"
              >
                {item}
              </button>
            ))}
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full"
              onClick={() => setIsContactModalOpen(true)}
            >
              Start a Project
            </Button>
          </nav>
        )}
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </header>
  );
}
