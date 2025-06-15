
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

interface ToolsMenuProps {
  role: 'guest' | 'user' | 'admin';
}

const ToolsMenu = ({ role }: ToolsMenuProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  if (role === 'guest') return null;
  
  const toolsItems = role === "admin" ? adminTools : userTools;

  return (
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
  );
};

export default ToolsMenu;
