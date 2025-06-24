
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Shield, UserX, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingRoleSwitcherProps {
  role: 'guest' | 'user' | 'admin';
  setRole: (role: 'guest' | 'user' | 'admin') => void;
}

const FloatingRoleSwitcher = ({ role, setRole }: FloatingRoleSwitcherProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Only show in development
  if (process.env.NODE_ENV === 'production') return null;

  const roles = [
    {
      key: 'guest' as const,
      label: 'Guest',
      icon: UserX,
      color: 'bg-gray-500 hover:bg-gray-600',
      textColor: 'text-gray-700'
    },
    {
      key: 'user' as const,
      label: 'User',
      icon: User,
      color: 'bg-brand-500 hover:bg-brand-600',
      textColor: 'text-brand-600'
    },
    {
      key: 'admin' as const,
      label: 'Admin',
      icon: Shield,
      color: 'bg-red-500 hover:bg-red-600',
      textColor: 'text-red-600'
    }
  ];

  const currentRole = roles.find(r => r.key === role);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Role Options */}
      {isExpanded && (
        <div className="flex flex-col space-y-2 animate-fade-in">
          {roles.filter(r => r.key !== role).map((roleOption) => (
            <Button
              key={roleOption.key}
              onClick={() => {
                setRole(roleOption.key);
                setIsExpanded(false);
              }}
              className={cn(
                "shadow-lg border border-white/20 text-white font-medium px-4 py-2 rounded-full",
                roleOption.color
              )}
              size="sm"
            >
              <roleOption.icon className="w-4 h-4 mr-2" />
              Switch to {roleOption.label}
            </Button>
          ))}
        </div>
      )}

      {/* Main Button */}
      <div className="flex items-center space-x-2">
        {/* Current Role Indicator */}
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200 px-3 py-2 rounded-full shadow-lg">
          <div className="flex items-center space-x-2">
            {currentRole && <currentRole.icon className={`w-4 h-4 ${currentRole.textColor}`} />}
            <span className="text-sm font-medium text-gray-700">
              Testing as: <span className={`font-semibold ${currentRole?.textColor}`}>{role}</span>
            </span>
          </div>
        </div>

        {/* Toggle Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "shadow-lg border border-white/20 text-white font-medium rounded-full w-12 h-12 p-0",
            currentRole?.color
          )}
          size="sm"
        >
          {isExpanded ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronUp className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Helper Text */}
      {!isExpanded && (
        <div className="text-xs text-gray-500 bg-white/80 px-2 py-1 rounded shadow-sm">
          Click to switch roles
        </div>
      )}
    </div>
  );
};

export default FloatingRoleSwitcher;
