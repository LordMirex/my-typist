
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

interface LogoProps {
  role: 'guest' | 'user' | 'admin';
}

const Logo = ({ role }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative">
        {/* Background "My" - responsive text sizes */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xl sm:text-2xl font-black text-brand-100/40 select-none transform -rotate-12 -translate-x-1 animate-pulse">
            My
          </span>
        </div>
        
        {/* Foreground container - responsive sizing */}
        <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
          <span className="text-white font-bold text-base sm:text-lg tracking-tight">T</span>
          <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Admin indicator */}
        {role === "admin" && (
          <Shield className="absolute -top-1 -left-1 h-3 w-3 sm:h-4 sm:w-4 text-red-600 bg-white rounded-full p-0.5 animate-fade-in" />
        )}
      </div>
      
      <div className="flex flex-col">
        <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
          MyTypist
        </span>
        <span className="text-xs text-gray-500 -mt-1 hidden sm:block">Professional Documents</span>
      </div>
    </Link>
  );
};

export default Logo;
