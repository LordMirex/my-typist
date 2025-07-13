
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, FileText, Zap, Shield, Play, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative section-padding bg-gradient-to-br from-muted/30 via-background to-accent/5 overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-bounce-gentle"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="relative container-wide">
        <div className="text-center">
          {/* Enhanced badge */}
          <div className="inline-flex items-center px-8 py-4 glass-effect rounded-full text-sm font-semibold mb-12 animate-fade-in hover-lift">
            <Zap className="w-5 h-5 mr-3 text-accent" />
            <span className="text-gradient-primary">Lightning-Fast Document Automation</span>
            <span className="ml-3 px-3 py-1 btn-accent text-xs rounded-full">NEW</span>
          </div>

          {/* Enhanced main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
            <span className="text-foreground">Automate Documents &</span>
            <br />
            <span className="text-gradient-primary">
              E-Signatures
            </span>
            <br />
            <span className="text-foreground text-4xl sm:text-5xl lg:text-7xl">in Minutes</span>
          </h1>

          {/* Enhanced subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-5xl mx-auto animate-fade-in leading-relaxed">
            MyTypist revolutionizes document workflows with <span className="font-bold text-gradient-primary">AI-powered automation</span> and 
            <span className="font-bold text-gradient-accent"> seamless e-signatures</span>. 
            Transform your business processes in minutes, not hours.
          </p>

          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <Link to="/signup">
              <Button variant="gradient" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/how-to-use">
              <Button variant="outline" size="xl" className="group">
                <Play className="mr-2 h-6 w-6" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Enhanced trust indicators */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12 animate-fade-in">
            <div className="flex items-center gap-8 text-base text-muted-foreground">
              <div className="flex items-center card-elevated px-4 py-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-accent mr-3" />
                <span className="font-semibold">14-day free trial</span>
              </div>
              <div className="flex items-center card-elevated px-4 py-3 rounded-full">
                <Shield className="w-6 h-6 text-accent mr-3" />
                <span className="font-semibold">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center card-elevated px-4 py-3 rounded-full">
                <FileText className="w-6 h-6 text-accent mr-3" />
                <span className="font-semibold">No credit card required</span>
              </div>
            </div>
            <div className="flex items-center gap-3 card-elevated px-6 py-4 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <span className="text-base text-foreground font-semibold">4.9/5 from 2,500+ users</span>
            </div>
          </div>

          {/* Enhanced customer logos */}
          <div className="animate-fade-in">
            <p className="text-base text-muted-foreground mb-8 font-semibold">Trusted by leading companies worldwide</p>
            <div className="flex items-center justify-center gap-12 opacity-70">
              <div className="card-elevated px-6 py-4 rounded-xl hover-lift">
                <span className="font-bold text-lg text-gradient-primary">TechCorp</span>
              </div>
              <div className="card-elevated px-6 py-4 rounded-xl hover-lift">
                <span className="font-bold text-lg text-gradient-primary">InnovateLab</span>
              </div>
              <div className="card-elevated px-6 py-4 rounded-xl hover-lift">
                <span className="font-bold text-lg text-gradient-primary">GlobalTech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced hero demo section */}
        <div className="mt-24 animate-scale-in">
          <div className="card-elevated rounded-3xl p-12 hover-glow">
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl flex items-center justify-center relative overflow-hidden">
              {/* Demo background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative text-center z-10">
                <div className="relative mb-8 group">
                  <div className="w-28 h-28 btn-gradient rounded-3xl flex items-center justify-center mx-auto shadow-[var(--shadow-large)] group-hover:scale-110 transition-[var(--transition-smooth)]">
                    <FileText className="w-14 h-14 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-[var(--shadow-medium)]">
                    <CheckCircle className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-foreground font-bold text-2xl mb-3">Interactive Demo</h3>
                <p className="text-muted-foreground text-xl mb-6">See MyTypist in action - Create, automate & sign</p>
                <Button variant="gradient" size="lg" className="hover-lift">
                  <Play className="mr-2 h-5 w-5" />
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
