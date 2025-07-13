
import { FileText, PenTool, Clock, Shield, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: 'AutoType Documents',
      description: 'Create professional documents instantly with our intelligent automation tools and pre-built templates.',
      gradient: 'text-gradient-primary'
    },
    {
      icon: PenTool,
      title: 'AutoSign E-Signatures',
      description: 'Get documents signed quickly with legally binding e-signatures that comply with global standards.',
      gradient: 'text-gradient-accent'
    },
    {
      icon: Clock,
      title: 'Save Hours Daily',
      description: 'Reduce document processing time by 90% with smart automation and streamlined workflows.',
      gradient: 'text-gradient-primary'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards.',
      gradient: 'text-gradient-accent'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration and role-based permissions.',
      gradient: 'text-gradient-primary'
    },
    {
      icon: Zap,
      title: 'Instant Integration',
      description: 'Connect with Google Drive, Dropbox, and other tools you already use daily.',
      gradient: 'text-gradient-accent'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-accent/5">
      <div className="container-wide">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Everything You Need to{' '}
            <span className="text-gradient-primary">Streamline Documents</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From creation to signature, MyTypist handles your entire document workflow 
            with enterprise-grade security and lightning-fast performance.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-elevated hover-lift group animate-fade-in border-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-10">
                <div className="mb-6">
                  <div className="w-16 h-16 btn-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-[var(--transition-smooth)] shadow-[var(--shadow-medium)]">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${feature.gradient}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
