
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './navigation/Logo';
import NavigationItems from './navigation/NavigationItems';
import ToolsMenu from './navigation/ToolsMenu';
import AuthButtons from './navigation/AuthButtons';
import MobileMenu from './navigation/MobileMenu';

// Temporary (mock) user state, to be replaced with real auth
const useAuth = () => {
  const [role, setRole] = useState<'guest' | 'user' | 'admin'>('guest');
  
  // Only show role switcher in development
  const RoleDevSwitch = () => {
    if (process.env.NODE_ENV === 'production') return null;
    
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 p-2 px-4 rounded-lg shadow-lg space-x-2 text-xs hidden md:flex">
        <span className="font-medium">Role:</span>
        <button onClick={() => setRole('guest')} className={role==='guest' ? 'font-bold text-brand-600 underline' : 'text-gray-600 hover:text-brand-600'}>Guest</button>
        <button onClick={() => setRole('user')} className={role==='user' ? 'font-bold text-brand-600 underline' : 'text-gray-600 hover:text-brand-600'}>User</button>
        <button onClick={() => setRole('admin')} className={role==='admin' ? 'font-bold text-red-600 underline' : 'text-gray-600 hover:text-red-600'}>Admin</button>
      </div>
    );
  };
  return { role, setRole, RoleDevSwitch };
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { role, RoleDevSwitch } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when location changes - Fixed: use useEffect instead of useState
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Logo role={role} />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationItems role={role} />
              <ToolsMenu role={role} />
              <AuthButtons role={role} />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-brand-600 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileMenu 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            role={role}
            isActive={isActive}
          />
        </div>
      </nav>
      
      <RoleDevSwitch />
    </>
  );
};

export default Navigation;
