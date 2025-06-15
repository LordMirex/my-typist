
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Shield, User, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

// Temporary (mock) user state, to be replaced with real auth
const useAuth = () => {
  const [role, setRole] = useState<'guest' | 'user' | 'admin'>('guest');
  
  const RoleDevSwitch = () => (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 p-2 px-4 rounded-lg shadow-lg space-x-2 text-xs hidden md:flex">
      <span className="font-medium">Role:</span>
      <button onClick={() => setRole('guest')} className={role==='guest' ? 'font-bold text-brand-600 underline' : 'text-gray-600 hover:text-brand-600'}>Guest</button>
      <button onClick={() => setRole('user')} className={role==='user' ? 'font-bold text-brand-600 underline' : 'text-gray-600 hover:text-brand-600'}>User</button>
      <button onClick={() => setRole('admin')} className={role==='admin' ? 'font-bold text-red-600 underline' : 'text-gray-600 hover:text-red-600'}>Admin</button>
    </div>
  );
  return { role, setRole, RoleDevSwitch };
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { role, RoleDevSwitch } = useAuth();

  const publicNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'How to Use', href: '/how-to-use' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  const secondaryNavItems = [
    { name: 'Contact', href: '/contact' },
    { name: 'Become a Partner', href: '/become-partner' },
    { name: 'Support', href: '/support' },
    { name: 'Legals', href: '/legals' }
  ];

  const userTools = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Templates', href: '/templates' },
    { name: 'Create Document', href: '/create-document' },
    { name: 'Analytics', href: '/analytics' },
    { name: 'Bonuses', href: '/bonuses' },
  ];

  const adminTools = [
    ...userTools,
    { name: 'Admin Panel', href: '/admin' }
  ];

  const isActive = (path: string) => location.pathname === path;
  const toolsItems = role === "admin" ? adminTools : role === "user" ? userTools : [];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <span className="text-white font-bold text-lg">M</span>
                  <span className="absolute -top-0.5 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-brand-600 font-bold text-xs">T</span>
              </div>
              {role === "admin" && (
                <Shield className="absolute -top-1 -left-1 h-4 w-4 text-red-600 bg-white rounded-full p-0.5" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
                MyTypist
              </span>
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block">Professional Documents</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {publicNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-600 relative",
                  isActive(item.href)
                    ? "text-brand-600"
                    : "text-gray-700"
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-600 rounded-full" />
                )}
              </Link>
            ))}

            {/* More Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-brand-600">
                  More
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white">
                {secondaryNavItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "w-full cursor-pointer",
                        isActive(item.href) ? "text-brand-600 bg-brand-50" : ""
                      )}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Tools Menu for Authenticated Users */}
            {role !== "guest" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "text-gray-700 hover:text-brand-600",
                      toolsItems.some(item => isActive(item.href)) ? "text-brand-600" : ""
                    )}
                  >
                    Tools
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white">
                  {toolsItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "w-full cursor-pointer",
                          isActive(item.href) ? "text-brand-600 bg-brand-50" : ""
                        )}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Auth Buttons & User Menu */}
          <div className="hidden lg:flex items-center space-x-3">
            {role === "guest" && (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-gray-700 hover:text-brand-600">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="bg-brand-600 hover:bg-brand-700 shadow-md">
                    Get Started Free
                  </Button>
                </Link>
              </>
            )}

            {role === "user" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Account</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="cursor-pointer">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {role === "admin" && (
              <div className="flex items-center space-x-2">
                <Link to="/admin">
                  <Button variant="destructive" size="sm" className="shadow-md">
                    <Shield className="w-4 h-4 mr-2" />
                    Admin Panel
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <User className="w-4 h-4" />
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white">
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings" className="cursor-pointer">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              {/* Public Nav Items */}
              <div className="space-y-1">
                {publicNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium transition-colors rounded-md",
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

              {/* Secondary Nav Items */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3">
                  More
                </div>
                {secondaryNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium transition-colors rounded-md",
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

              {/* Tools for Authenticated Users */}
              {role !== "guest" && (
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3">
                    Tools
                  </div>
                  {toolsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 text-base font-medium transition-colors rounded-md",
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

              {/* Auth Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2 px-3">
                {role === "guest" && (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block">
                      <Button variant="outline" size="sm" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="block">
                      <Button size="sm" className="w-full bg-brand-600 hover:bg-brand-700">
                        Get Started Free
                      </Button>
                    </Link>
                  </>
                )}

                {(role === "user" || role === "admin") && (
                  <>
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="block">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                    </Link>
                    <Link to="/settings" onClick={() => setIsMenuOpen(false)} className="block">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        Settings
                      </Button>
                    </Link>
                    {role === "admin" && (
                      <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="block">
                        <Button variant="destructive" size="sm" className="w-full justify-start">
                          <Shield className="w-4 h-4 mr-2" />
                          Admin Panel
                        </Button>
                      </Link>
                    )}
                    <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
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
