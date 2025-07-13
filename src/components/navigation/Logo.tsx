
import { Link } from 'react-router-dom';
import { FileText, Crown } from 'lucide-react';

interface LogoProps {
  role: 'guest' | 'user' | 'admin';
}

const Logo = ({ role }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center space-x-4 group">
      <div className="relative">
        {/* Premium logo icon with enhanced gradient */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center btn-gradient shadow-[var(--shadow-medium)] group-hover:scale-110 group-hover:shadow-[var(--shadow-large)] transition-[var(--transition-smooth)]">
          <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
        </div>
        
        {/* Enhanced admin crown indicator */}
        {role === "admin" && (
          <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-destructive rounded-full flex items-center justify-center shadow-[var(--shadow-medium)] animate-bounce-gentle">
            <Crown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-destructive-foreground" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-bold text-gradient-primary tracking-tight group-hover:scale-105 transition-[var(--transition-smooth)]">
          MyTypist
        </span>
        <span className="text-xs text-muted-foreground -mt-1 font-semibold tracking-wide group-hover:text-gradient-accent transition-[var(--transition-smooth)]">
          Document Automation
        </span>
      </div>
    </Link>
  );
};

export default Logo;
