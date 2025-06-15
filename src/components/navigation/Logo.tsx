
import { Link } from 'react-router-dom';
import { FileText, Crown } from 'lucide-react';

interface LogoProps {
  role: 'guest' | 'user' | 'admin';
}

const Logo = ({ role }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative">
        {/* Professional logo design */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300 border border-blue-200">
          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
        </div>
        
        {/* Admin crown indicator */}
        {role === "admin" && (
          <Crown className="absolute -top-1 -left-1 h-4 w-4 sm:h-5 sm:w-5 text-amber-500 bg-white rounded-full p-0.5 shadow-sm" />
        )}
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          MyTypist
        </span>
        <span className="text-xs sm:text-sm text-gray-500 -mt-1 font-medium">
          Professional Documents
        </span>
      </div>
    </Link>
  );
};

export default Logo;
