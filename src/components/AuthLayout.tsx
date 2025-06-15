
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
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">MT</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">MyTypist</span>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
