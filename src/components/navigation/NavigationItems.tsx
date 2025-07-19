import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationItemsProps {
  role: 'guest' | 'user' | 'admin';
}

const NavigationItems = ({ role }: NavigationItemsProps) => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const productsItems = [
    { name: 'AutoSign', href: '/autosign', description: 'Automated document signing' },
    { name: 'AutoType', href: '/autotype', description: 'Intelligent document generation' },
    { name: 'Templates', href: '/templates', description: 'Pre-built document templates' },
  ];

  const resourcesItems = [
    { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
    { name: 'How to Use', href: '/how-to-use', description: 'Step-by-step guides' },
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    { name: 'Support', href: '/support', description: 'Get help when you need it' },
  ];

  return (
    <div className="flex items-center space-x-8">
      {/* Products Dropdown */}
      <div className="relative group">
        <button
          onClick={() => handleDropdownToggle('products')}
          className={cn(
            "flex items-center space-x-1 text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-md",
            productsItems.some(item => isActive(item.href)) || openDropdown === 'products'
              ? "text-brand-600 bg-brand-50"
              : "text-gray-700 hover:text-brand-600"
          )}
        >
          <span>Products</span>
          <ChevronDown 
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              openDropdown === 'products' && "rotate-180"
            )} 
          />
        </button>

        {openDropdown === 'products' && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div className="p-4 space-y-2">
              {productsItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeDropdown}
                  className={cn(
                    "flex flex-col p-3 rounded-lg transition-colors duration-150 group/item",
                    isActive(item.href) 
                      ? "text-brand-600 bg-brand-50" 
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <div className="font-medium group-hover/item:text-brand-600 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5">
                    {item.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div className="relative group">
        <button
          onClick={() => handleDropdownToggle('resources')}
          className={cn(
            "flex items-center space-x-1 text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-md",
            resourcesItems.some(item => isActive(item.href)) || openDropdown === 'resources'
              ? "text-brand-600 bg-brand-50"
              : "text-gray-700 hover:text-brand-600"
          )}
        >
          <span>Resources</span>
          <ChevronDown 
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              openDropdown === 'resources' && "rotate-180"
            )} 
          />
        </button>

        {openDropdown === 'resources' && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div className="p-4 space-y-2">
              {resourcesItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeDropdown}
                  className={cn(
                    "flex flex-col p-3 rounded-lg transition-colors duration-150 group/item",
                    isActive(item.href) 
                      ? "text-brand-600 bg-brand-50" 
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <div className="font-medium group-hover/item:text-brand-600 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5">
                    {item.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Direct Links */}
      <Link
        to="/about"
        className={cn(
          "text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-md",
          isActive('/about') 
            ? "text-brand-600 bg-brand-50" 
            : "text-gray-700 hover:text-brand-600"
        )}
      >
        About
      </Link>

      <Link
        to="/pricing"
        className={cn(
          "text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-md",
          isActive('/pricing') 
            ? "text-brand-600 bg-brand-50" 
            : "text-gray-700 hover:text-brand-600"
        )}
      >
        Pricing
      </Link>

      <Link
        to="/contact"
        className={cn(
          "text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-md",
          isActive('/contact') 
            ? "text-brand-600 bg-brand-50" 
            : "text-gray-700 hover:text-brand-600"
        )}
      >
        Contact
      </Link>

      {/* Close dropdowns when clicking outside */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDropdown}
        />
      )}
    </div>
  );
};

export default NavigationItems;