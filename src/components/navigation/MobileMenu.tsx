
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

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

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  role: 'guest' | 'user' | 'admin';
  isActive: (path: string) => boolean;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, role, isActive }: MobileMenuProps) => {
  const toolsItems = role === "admin" ? adminTools : role === "user" ? userTools : [];

  if (!isMenuOpen) return null;

  return (
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
  );
};

export default MobileMenu;
