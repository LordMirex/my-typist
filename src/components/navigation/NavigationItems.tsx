
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

const NavigationItems = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
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
    </div>
  );
};

export default NavigationItems;
