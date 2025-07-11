
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, FileText, Zap, Shield, Play, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative section-spacing bg-gradient-to-br from-background via-muted/20 to-accent/10 overflow-hidden">
      {/* Modern background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-primary-glow/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/30 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="relative section-container">
        <div className="text-center">
          {/* Modern feature badge */}
          <div className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium mb-8 animate-fade-in border border-primary/20">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="font-semibold text-foreground">Lightning-Fast Document Automation</span>
            <span className="ml-2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-bold shadow-sm">NEW</span>
          </div>

          {/* Enhanced main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            <span className="text-foreground">Automate Documents &</span>
            <br />
            <span className="gradient-text bg-gradient-to-r from-primary via-primary-glow to-primary">
              E-Signatures
            </span>
            <br />
            <span className="text-foreground text-3xl sm:text-4xl lg:text-5xl">in Minutes</span>
          </h1>

          {/* Enhanced subheadline */}
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed font-medium">
            MyTypist revolutionizes document workflows with <span className="font-bold text-primary">AI-powered automation</span> and 
            <span className="font-bold text-primary"> legally binding e-signatures</span>. 
            Transform your business processes in minutes, not hours.
          </p>

          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in">
            <Link to="/signup">
              <Button size="lg" className="px-12 py-4 text-lg font-bold group hover-glow rounded-xl shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link to="/how-to-use">
              <Button variant="outline" size="lg" className="px-12 py-4 text-lg font-bold group rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Enhanced trust indicators */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12 animate-fade-in">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm lg:text-base">
              <div className="flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-semibold text-green-800">14-day free trial</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-800">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full border border-purple-200">
                <FileText className="w-5 h-5 text-purple-600 mr-2" />
                <span className="font-semibold text-purple-800">No credit card required</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-sm text-yellow-800 font-bold">4.9/5 from 2,500+ users</span>
            </div>
          </div>

          {/* Enhanced customer logos */}
          <div className="animate-fade-in">
            <p className="text-sm text-muted-foreground mb-8 font-semibold uppercase tracking-wider">Trusted by 10,000+ businesses worldwide</p>
            <div className="flex items-center justify-center gap-12 opacity-70 flex-wrap">
              <div className="px-6 py-3 card-elegant hover-lift transition-all duration-300">
                <span className="font-bold text-lg text-muted-foreground">TechCorp</span>
              </div>
              <div className="px-6 py-3 card-elegant hover-lift transition-all duration-300">
                <span className="font-bold text-lg text-muted-foreground">InnovateLab</span>
              </div>
              <div className="px-6 py-3 card-elegant hover-lift transition-all duration-300">
                <span className="font-bold text-lg text-muted-foreground">GlobalTech</span>
              </div>
              <div className="px-6 py-3 card-elegant hover-lift transition-all duration-300">
                <span className="font-bold text-lg text-muted-foreground">DataFlow</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced hero demo section */}
        <div className="mt-24 animate-scale-in">
          <div className="card-elegant p-8 hover-lift transition-all duration-500">
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-muted/30 to-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden border-2 border-primary/10">
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary/20 rounded-lg animate-pulse"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-accent/30 rounded-full animate-pulse delay-150"></div>
                <div className="absolute bottom-4 left-1/3 w-16 h-4 bg-primary-glow/20 rounded-full animate-pulse delay-300"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-3xl flex items-center justify-center mx-auto shadow-2xl hover-glow">
                    <FileText className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-foreground font-bold text-2xl mb-3">Interactive Demo</h3>
                <p className="text-muted-foreground text-lg mb-6 font-medium">See MyTypist transform your workflow</p>
                <Button size="lg" className="hover-glow">
                  <Play className="mr-2 h-5 w-5" />
                  Launch Interactive Demo
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
