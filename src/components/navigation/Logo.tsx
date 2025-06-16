
import { Link } from 'react-router-dom';
import { Pen, Crown } from 'lucide-react';

interface LogoProps {
  role: 'guest' | 'user' | 'admin';
}

const Logo = ({ role }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center bg-gray-800 text-white shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-700 group-hover:shadow-xl">
          <Pen className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        
        {/* Admin crown indicator */}
        {role === "admin" && (
          <Crown className="absolute -top-1.5 -right-1.5 h-4 w-4 sm:h-5 sm:w-5 text-amber-400 bg-white rounded-full p-0.5 shadow-md" />
        )}
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-tight">
          MyTypist
        </span>
        <span className="text-xs text-gray-500 -mt-1 font-medium tracking-wide">
          Document Solutions
        </span>
      </div>
    </Link>
  );
};

export default Logo;
