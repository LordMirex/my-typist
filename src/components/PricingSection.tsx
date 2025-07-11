
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '₦0',
      period: 'forever',
      description: 'Perfect for individuals getting started',
      features: [
        '5 documents per month',
        '2 e-signatures per month',
        'Basic templates',
        'Email support',
        'Basic integrations'
      ],
      cta: 'Start Free',
      href: '/signup',
      popular: false
    },
    {
      name: 'Professional',
      price: '₦7,500',
      period: 'per month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Unlimited documents',
        'Unlimited e-signatures',
        'Premium templates',
        'Priority support',
        'Advanced integrations',
        'Team collaboration',
        'Custom branding',
        'Analytics dashboard'
      ],
      cta: 'Start Professional',
      href: '/signup?plan=professional',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₦12,000',
      period: 'per month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Professional',
        'Advanced security features',
        'SSO integration',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Advanced analytics',
        'White-label options'
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-muted/10 to-background">
      <div className="section-container">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full text-sm font-semibold text-green-600 mb-6">
            💰 Transparent Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. Start free and upgrade as you grow. 
            All plans include our enterprise-grade security and support.
          </p>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative hover-lift transition-all duration-300 animate-fade-in ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl scale-105 hover-glow' 
                  : 'card-elegant hover:border-primary/20'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6 pt-10">
                <h3 className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 mb-4">
                  <span className={`text-5xl font-bold ${plan.popular ? 'gradient-text' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2 text-lg">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-base font-medium">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.href} className="block">
                  <Button 
                    variant={plan.popular ? "gradient" : "outline"}
                    size="lg"
                    className="w-full font-bold"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="card-elegant p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-lg font-medium mb-2">
              All plans include a 14-day free trial. No credit card required.{' '}
            </p>
            <Link to="/pricing" className="text-primary hover:text-primary-glow font-bold inline-flex items-center group transition-colors">
              View detailed comparison 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
