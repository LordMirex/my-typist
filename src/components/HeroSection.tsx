
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, FileText, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-brand-100 text-brand-800 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4 mr-2" />
            Fast Document Automation & E-Signatures
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Automate Documents &{' '}
            <span className="gradient-text">
              E-Signatures
            </span>{' '}
            in Minutes
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            MyTypist combines powerful document automation (AutoType) with seamless 
            e-signatures (AutoSign) to help businesses work faster and smarter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Link to="/signup">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-to-use">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 animate-fade-in">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Free 14-day trial
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-green-500 mr-2" />
              No credit card required
            </div>
          </div>
        </div>

        {/* Hero Image/Demo */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-8 glass-effect">
            <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-16 h-16 text-brand-600 mx-auto mb-4" />
                <p className="text-brand-700 font-medium">Document Preview Coming Soon</p>
                <p className="text-brand-600 text-sm">Interactive demo will be available here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
