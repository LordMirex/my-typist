
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
    <section className="section-padding bg-gradient-to-br from-muted/20 via-background to-primary/5">
      <div className="container-wide">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Simple, Transparent{' '}
            <span className="text-gradient-primary">Pricing</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative card-elevated hover-lift group animate-scale-in ${
                plan.popular 
                  ? 'border-primary/20 shadow-[var(--shadow-large)] scale-105' 
                  : 'border-border/20'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="btn-gradient px-6 py-3 rounded-full text-sm font-bold flex items-center shadow-[var(--shadow-medium)]">
                    <Star className="w-4 h-4 mr-2 text-primary-foreground" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-10">
                <h3 className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-gradient-primary' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gradient-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2 text-lg">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-4 text-lg">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-10 pb-10">
                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                      <span className="text-foreground text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.href} className="block">
                  <Button 
                    variant={plan.popular ? 'gradient' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground text-lg">
            All plans include a 14-day free trial. No credit card required.{' '}
            <Link to="/pricing" className="text-gradient-primary hover:text-gradient-accent font-semibold hover-lift inline-block">
              View detailed comparison →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
