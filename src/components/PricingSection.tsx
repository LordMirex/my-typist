
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
        'Basic templates',
        'Document automation',
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
        'Advanced automation',
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your document automation needs. Start free and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative card-hover ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-border'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className={`text-2xl font-bold ${plan.popular ? 'text-primary' : 'text-card-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.href} className="block">
                  <Button 
                    className={`w-full py-3 btn-animate ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-background hover:bg-muted text-foreground border border-border'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.{' '}
            <Link to="/pricing" className="text-primary hover:text-primary/80 font-medium">
              View detailed comparison →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
