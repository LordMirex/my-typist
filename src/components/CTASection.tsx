
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-600 via-blue-600 to-purple-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-fade-in">
          <Zap className="w-4 h-4 mr-2" />
          Limited Time: 50% Off First 3 Months
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
          Ready to Transform Your{' '}
          <span className="text-yellow-300">Document Workflow?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
          Join thousands of businesses already saving hours daily with MyTypist's 
          AI-powered document automation and e-signature platform.
        </p>

        {/* Benefits list */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in">
          <div className="flex items-center text-white/90">
            <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
            <span>Setup in under 5 minutes</span>
          </div>
          <div className="flex items-center text-white/90">
            <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
            <span>No technical skills required</span>
          </div>
          <div className="flex items-center text-white/90">
            <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Link to="/signup">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 px-12 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              Start Free Trial Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-brand-600 px-12 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Talk to Sales
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 text-center animate-fade-in">
          <p className="text-white/70 text-sm mb-4">
            Trusted by 10,000+ businesses worldwide
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <div className="text-white font-semibold">TechCorp</div>
            <div className="text-white font-semibold">InnovateLab</div>
            <div className="text-white font-semibold">GlobalTech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
