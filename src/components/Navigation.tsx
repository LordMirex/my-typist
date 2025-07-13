
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './navigation/Logo';
import NavigationItems from './navigation/NavigationItems';
import ToolsMenu from './navigation/ToolsMenu';
import AuthButtons from './navigation/AuthButtons';
import MobileMenu from './navigation/MobileMenu';
import FloatingRoleSwitcher from './FloatingRoleSwitcher';

// Temporary (mock) user state, to be replaced with real auth
const useAuth = () => {
  const [role, setRoleState] = useState<'guest' | 'user' | 'admin'>('guest');
  
  // Load role from localStorage on mount
  useEffect(() => {
    const savedRole = localStorage.getItem('testRole') as 'guest' | 'user' | 'admin';
    if (savedRole && ['guest', 'user', 'admin'].includes(savedRole)) {
      setRoleState(savedRole);
    }
  }, []);

  // Save role to localStorage whenever it changes
  const setRole = (newRole: 'guest' | 'user' | 'admin') => {
    setRoleState(newRole);
    localStorage.setItem('testRole', newRole);
  };
  
  return { role, setRole };
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { role, setRole } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="sticky top-0 z-50 glass-effect border-b border-border/50 shadow-[var(--shadow-soft)]">
        <div className="container-wide">
          <div className="flex justify-between items-center h-20 lg:h-24">
            <Logo role={role} />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationItems role={role} />
              <ToolsMenu role={role} />
              <AuthButtons role={role} />
            </div>

            {/* Enhanced mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary hover-lift p-3"
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
      
      {/* Floating Role Switcher */}
      <FloatingRoleSwitcher role={role} setRole={setRole} />
    </>
  );
};

export default Navigation;
