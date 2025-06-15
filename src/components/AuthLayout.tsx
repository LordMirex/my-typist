
import { ReactNode } from 'react';
import SEO from './SEO';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-100">
      <SEO title={title} description={description} />
      <div className="flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <span className="text-white font-bold text-2xl">M</span>
                    <span className="absolute -top-1 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-brand-600 font-bold text-xs">T</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
                  MyTypist
                </span>
                <span className="text-xs sm:text-sm text-gray-500 -mt-1">Professional Documents Made Simple</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
