
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "TechStart Inc.",
      content: "MyTypist transformed our document workflow completely. We went from spending 4 hours daily on paperwork to just 30 minutes. The ROI is incredible!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Legal Director",
      company: "GlobalLaw Firm",
      content: "The e-signature feature is seamless and legally compliant. Our clients love how fast they can sign documents now. It's a game-changer for legal practices.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "HR Director",
      company: "InnovateCorps",
      content: "Onboarding new employees used to take days. With MyTypist's automation, we complete all paperwork in under an hour. Our team efficiency has skyrocketed!",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Loved by{' '}
            <span className="gradient-text bg-gradient-to-r from-brand-600 to-blue-600 bg-clip-text text-transparent">
              Thousands
            </span>{' '}
            of Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how MyTypist is transforming document workflows across industries
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 relative">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-200 group-hover:text-brand-300 transition-colors" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Join thousands of satisfied customers
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span>4.9/5 average rating • 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
