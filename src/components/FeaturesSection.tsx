
import { FileText, PenTool, Clock, Shield, Users, Zap, Bot, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered AutoType',
      description: 'Create professional documents instantly with our intelligent automation tools and pre-built templates powered by advanced AI.',
      color: 'text-brand-600',
      bgColor: 'bg-brand-50',
      hoverBg: 'group-hover:bg-brand-100'
    },
    {
      icon: PenTool,
      title: 'Smart E-Signatures',
      description: 'Get documents signed quickly with legally binding e-signatures that comply with global standards and integrate seamlessly.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverBg: 'group-hover:bg-blue-100'
    },
    {
      icon: Clock,
      title: 'Save 90% Time',
      description: 'Reduce document processing time dramatically with smart automation, bulk operations, and streamlined workflows.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverBg: 'group-hover:bg-green-100'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SOC 2 compliance, and advanced security features protect your sensitive documents.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      hoverBg: 'group-hover:bg-purple-100'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration, role-based permissions, and advanced sharing controls.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverBg: 'group-hover:bg-orange-100'
    },
    {
      icon: Zap,
      title: 'Instant Integration',
      description: 'Connect with Google Drive, Dropbox, Slack, and 100+ other tools you already use in your daily workflow.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      hoverBg: 'group-hover:bg-yellow-100'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Track document performance, signing rates, and workflow efficiency with detailed analytics and reporting.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverBg: 'group-hover:bg-indigo-100'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Meet international legal requirements with GDPR, HIPAA, and eIDAS compliant document processing.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      hoverBg: 'group-hover:bg-pink-100'
    },
    {
      icon: FileText,
      title: 'Smart Templates',
      description: 'Access hundreds of professional templates or create custom ones with our intuitive template builder.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      hoverBg: 'group-hover:bg-teal-100'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-100 text-brand-800 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span className="gradient-text bg-gradient-to-r from-brand-600 to-blue-600 bg-clip-text text-transparent">
              Streamline Documents
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From creation to signature, MyTypist handles your entire document workflow 
            with enterprise-grade security and lightning-fast AI-powered automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="hover:shadow-xl transition-all duration-500 border-0 shadow-md group hover:scale-105 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 relative">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`w-14 h-14 ${feature.bgColor} ${feature.hoverBg} rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                      <feature.icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-brand-600 font-medium">
            <span>And many more features to discover</span>
            <Zap className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
