
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

// Temporary (mock) user state, to be replaced with real auth
const useAuth = () => {
  // Simulate roles: "guest" | "user" | "admin"
  // Replace this in the future with real auth from Supabase/Clerk
  const [role, setRole] = useState<'guest' | 'user' | 'admin'>('guest');
  // UI for role selection for demo
  const RoleDevSwitch = () => (
    <div className="fixed bottom-4 right-4 z-50 bg-brand-50 border p-1 px-3 rounded shadow space-x-2 text-xs hidden md:flex">
      <span>Role:</span>
      <button onClick={() => setRole('guest')} className={role==='guest' ? 'font-bold underline' : ''}>Guest</button>
      <button onClick={() => setRole('user')} className={role==='user' ? 'font-bold underline' : ''}>User</button>
      <button onClick={() => setRole('admin')} className={role==='admin' ? 'font-bold underline text-brand-600' : ''}>Admin</button>
    </div>
  );
  return { role, setRole, RoleDevSwitch };
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const { role, RoleDevSwitch } = useAuth();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'How to Use', href: '/how-to-use' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Become a Partner', href: '/become-partner' },
    { name: 'Support', href: '/support' },
    { name: 'Legals', href: '/legals' }
  ];

  const userTools = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Templates', href: '/templates' },
    { name: 'Create Document', href: '/create-document' },
    { name: 'Bonuses', href: '/bonuses' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'Settings', href: '/settings' },
    { name: 'Profile', href: '/profile' },
  ];

  const adminTools = [
    ...userTools,
    { name: '[Admin Panel]', href: '/admin' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Pick which tools based on role
  const toolsItems = role === "admin" ? adminTools : role === "user" ? userTools : [];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Modern Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">MT</span>
              </div>
              {role === "admin" && (
                <Shield className="absolute -top-1 -right-1 h-4 w-4 text-yellow-600 bg-white rounded-full p-0.5" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
                MyTypist
              </span>
              <span className="text-xs text-gray-500 -mt-1">Professional Documents</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-600",
                  isActive(item.href)
                    ? "text-brand-600 border-b-2 border-brand-600 pb-1"
                    : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
            {role !== "guest" && (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-brand-600",
                    toolsItems.some(item => isActive(item.href))
                      ? "text-brand-600"
                      : "text-gray-700"
                  )}
                >
                  Tools
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {toolsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-gray-100 transition-colors",
                            isActive(item.href)
                              ? "text-brand-600 bg-brand-50"
                              : "text-gray-700"
                          )}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {role === "guest" && (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                    Start Free
                  </Button>
                </Link>
              </>
            )}
            {role === "user" && (
              <Link to="/settings">
                <Button variant="ghost" size="sm">Settings</Button>
              </Link>
            )}
            {role === "admin" && (
              <Link to="/admin">
                <Button variant="destructive" size="sm">Admin Panel</Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand-600 bg-brand-50"
                      : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {role !== "guest" && (
                <div className="px-3 py-2">
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Tools
                  </div>
                  {toolsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "text-brand-600 bg-brand-50"
                          : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <div className="flex flex-col space-y-2 px-3 pt-4">
                {role === "guest" && (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                      <Button size="sm" className="w-full bg-brand-600 hover:bg-brand-700">
                        Start Free
                      </Button>
                    </Link>
                  </>
                )}
                {role === "user" && (
                  <Link to="/settings" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">
                      Settings
                    </Button>
                  </Link>
                )}
                {role === "admin" && (
                  <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="destructive" size="sm" className="w-full">
                      Admin Panel
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        <RoleDevSwitch />
      </div>
    </nav>
  );
};

export default Navigation;
