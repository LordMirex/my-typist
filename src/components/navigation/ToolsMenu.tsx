
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const userTools = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Templates', href: '/templates' },
  { name: 'Create Document', href: '/create-document' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Bonuses', href: '/bonuses' },
];

const adminTools = [
  { name: 'Admin Dashboard', href: '/admin' },
  { name: 'Upload Template', href: '/admin/upload-template' },
  { name: 'Manage Users', href: '/admin/users' },
  { name: 'System Settings', href: '/admin/settings' },
  { name: 'Reports', href: '/admin/reports' },
  ...userTools,
];

interface ToolsMenuProps {
  role: 'guest' | 'user' | 'admin';
}

const ToolsMenu = ({ role }: ToolsMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  if (role === 'guest') return null;
  
  const toolsItems = role === "admin" ? adminTools : userTools;
  const menuTitle = role === "admin" ? "Admin Tools" : "Tools";

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "text-gray-700 hover:text-brand-600 font-medium",
          toolsItems.some(item => isActive(item.href)) || isOpen ? "text-brand-600 bg-brand-50" : ""
        )}
      >
        {menuTitle}
        <ChevronDown className={cn(
          "ml-1 h-4 w-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-lg z-50">
            <div className="p-2">
              {role === "admin" && (
                <>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Admin Functions
                  </div>
                  {adminTools.slice(0, 5).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block w-full px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive(item.href) ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="my-2" />
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    User Tools
                  </div>
                </>
              )}
              {(role === "user" ? userTools : adminTools.slice(5)).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block w-full px-3 py-2 rounded-md text-sm transition-colors",
                    isActive(item.href) ? "text-brand-600 bg-brand-50" : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ToolsMenu;
