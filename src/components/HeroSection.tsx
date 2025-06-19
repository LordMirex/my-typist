
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, FileText, Zap, Shield, Play, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-100/30 to-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced badge with animation */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-100 to-blue-100 text-brand-800 rounded-full text-sm font-medium mb-8 animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Zap className="w-4 h-4 mr-2 text-brand-600" />
            <span className="font-semibold">Lightning-Fast Document Automation</span>
            <span className="ml-2 px-2 py-1 bg-brand-600 text-white text-xs rounded-full">NEW</span>
          </div>

          {/* Enhanced main headline with better typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gray-900">Automate Documents &</span>
            <br />
            <span className="gradient-text bg-gradient-to-r from-brand-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              E-Signatures
            </span>
            <br />
            <span className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl">in Minutes</span>
          </h1>

          {/* Enhanced subheadline */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            MyTypist revolutionizes document workflows with <span className="font-semibold text-brand-600">AI-powered automation</span> and 
            <span className="font-semibold text-blue-600"> seamless e-signatures</span>. 
            Transform your business processes in minutes, not hours.
          </p>

          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Link to="/signup">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/how-to-use">
              <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-semibold border-2 border-gray-300 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300 hover:scale-105 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Enhanced trust indicators with social proof */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8 animate-fade-in">
            <div className="flex items-center gap-6 text-sm lg:text-base text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-medium">14-day free trial</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-medium">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-medium">No credit card required</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">4.9/5 from 2,500+ users</span>
            </div>
          </div>

          {/* Customer logos */}
          <div className="animate-fade-in">
            <p className="text-sm text-gray-500 mb-6 font-medium">Trusted by leading companies worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <span className="font-bold text-gray-400">TechCorp</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <span className="font-bold text-gray-400">InnovateLab</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                <span className="font-bold text-gray-400">GlobalTech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced hero image/demo section */}
        <div className="mt-20 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
            <div className="aspect-video bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-grid-pattern"></div>
              </div>
              
              <div className="text-center z-10">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl animate-pulse">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-brand-700 font-bold text-xl mb-2">Interactive Demo</h3>
                <p className="text-brand-600 text-lg mb-4">See MyTypist in action</p>
                <Button className="bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Play className="mr-2 h-4 w-4" />
                  Launch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
