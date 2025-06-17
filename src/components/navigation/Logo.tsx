
import { Link } from 'react-router-dom';
import { FileText, Crown } from 'lucide-react';

interface LogoProps {
  role: 'guest' | 'user' | 'admin';
}

const Logo = ({ role }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative">
        {/* Enhanced logo icon with gradient background */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-600 to-blue-600 text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:from-brand-700 group-hover:to-blue-700">
          <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        
        {/* Enhanced admin crown indicator */}
        {role === "admin" && (
          <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
            <Crown className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-brand-600 transition-colors duration-300">
          MyTypist
        </span>
        <span className="text-xs text-gray-500 -mt-1 font-medium tracking-wide group-hover:text-brand-500 transition-colors duration-300">
          Document Automation
        </span>
      </div>
    </Link>
  );
};

export default Logo;
