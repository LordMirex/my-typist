
import { FileText, PenTool, Clock, Shield, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: 'Smart Document Creation',
      description: 'Generate professional documents instantly with AI-powered templates and intelligent content suggestions.',
      color: 'text-primary'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline your document processes with smart automation that handles repetitive tasks for you.',
      color: 'text-primary'
    },
    {
      icon: Clock,
      title: 'Save 90% of Your Time',
      description: 'Transform hours of manual work into minutes with our intelligent document automation platform.',
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards for complete peace of mind.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration, version control, and role-based permissions.',
      color: 'text-primary'
    },
    {
      icon: PenTool,
      title: 'Custom Templates',
      description: 'Create and customize document templates that adapt to your specific business needs and branding.',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Document Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From creation to distribution, MyTypist handles your entire document lifecycle 
            with AI-powered automation and enterprise-grade security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-hover border-0 shadow-md group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
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
