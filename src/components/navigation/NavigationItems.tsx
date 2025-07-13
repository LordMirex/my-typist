
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const guestNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'How to Use', href: '/how-to-use' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
];

const userNavItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Templates', href: '/templates' },
  { name: 'Documents', href: '/create-document' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Bonuses', href: '/bonuses' },
];

const adminNavItems = [
  { name: 'Admin Dashboard', href: '/admin' },
  { name: 'User Management', href: '/admin/users' },
  { name: 'System Health', href: '/admin/health' },
  { name: 'Admin Bonuses', href: '/admin/bonuses' },
  { name: 'Document Preview', href: '/admin/preview' },
  { name: 'Signature Management', href: '/admin/signatures' },
];

const secondaryNavItems = [
  { name: 'Contact', href: '/contact' },
  { name: 'Become a Partner', href: '/become-partner' },
  { name: 'Support', href: '/support' },
  { name: 'Legals', href: '/legals' }
];

interface NavigationItemsProps {
  role: 'guest' | 'user' | 'admin';
}

const NavigationItems = ({ role }: NavigationItemsProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  let primaryNavItems;
  switch (role) {
    case 'admin':
      primaryNavItems = adminNavItems;
      break;
    case 'user':
      primaryNavItems = userNavItems;
      break;
    default:
      primaryNavItems = guestNavItems;
  }

  return (
    <div className="hidden lg:flex items-center space-x-6">
      {primaryNavItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-brand-600 relative px-2 py-1 rounded-md",
            isActive(item.href)
              ? role === 'admin' 
                ? "text-red-600 bg-red-50" 
                : role === 'user'
                ? "text-brand-600 bg-brand-50"
                : "text-brand-600 bg-brand-50"
              : "text-gray-700"
          )}
        >
          {item.name}
          {isActive(item.href) && (
            <div className={cn(
              "absolute -bottom-2 left-0 w-full h-0.5 rounded-full",
              role === 'admin' ? "bg-red-600" : "bg-brand-600"
            )} />
          )}
        </Link>
      ))}

      {/* More Menu - only for guests */}
      {role === 'guest' && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-brand-600">
              More
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white shadow-lg border border-gray-200">
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
      )}
    </div>
  );
};

export default NavigationItems;
