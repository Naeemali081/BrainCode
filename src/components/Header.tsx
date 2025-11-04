import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Services', 'Technologies', 'Mobile Apps', 'Portfolio', 'About', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-gradient-to-br rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
              <img src="./public/smallLogo.png" alt="" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">BrainCode 360</span>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            <nav className="flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 rounded-full px-8"
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
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full"
            >
              Start a Project
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
