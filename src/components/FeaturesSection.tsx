
import { FileText, PenTool, Clock, Shield, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: 'AutoType Documents',
      description: 'Create professional documents instantly with our intelligent automation tools and pre-built templates.',
      color: 'text-brand-600'
    },
    {
      icon: PenTool,
      title: 'AutoSign E-Signatures',
      description: 'Get documents signed quickly with legally binding e-signatures that comply with global standards.',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Save Hours Daily',
      description: 'Reduce document processing time by 90% with smart automation and streamlined workflows.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards.',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration and role-based permissions.',
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      title: 'Instant Integration',
      description: 'Connect with Google Drive, Dropbox, and other tools you already use daily.',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/20">
      <div className="section-container">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
            ✨ Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Everything You Need to{' '}
            <span className="gradient-text">Streamline Documents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From creation to signature, MyTypist handles your entire document workflow 
            with enterprise-grade security and lightning-fast performance.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-elegant hover-lift hover-glow transition-all duration-300 group animate-fade-in border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
