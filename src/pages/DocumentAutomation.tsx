import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, Users, Zap, Shield, ArrowRight, Wand2, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const AutoType = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/30">
        {/* Hero Section */}
        <section className="hero-height flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
                <Bot className="w-4 h-4 mr-2" />
                <span className="font-semibold">AutoType - AI Document Generation</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-foreground">AI-Powered</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Document Creation
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                AutoType transforms how you create documents with intelligent templates, 
                automated content generation, and smart formatting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/signup">
                  <Button size="lg" className="px-10 py-6 text-lg font-semibold group">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/how-to-use">
                  <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-semibold">
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose AutoType?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the future of document creation with AI-powered automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Lightning Fast Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create professional documents in seconds. Our AI reduces document creation time by 95%.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Wand2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Smart Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Intelligent templates that adapt to your content, ensuring perfect formatting every time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI-Powered Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced AI understands context and generates relevant, professional content automatically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Transform Your Document Creation
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Intelligent Automation</h3>
                      <p className="text-muted-foreground">AI learns your preferences and creates documents automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Smart Formatting</h3>
                      <p className="text-muted-foreground">Perfect layouts and styling applied automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Template Library</h3>
                      <p className="text-muted-foreground">Access thousands of professional templates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Multi-Format Export</h3>
                      <p className="text-muted-foreground">Generate PDF, Word, HTML and other formats instantly</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-card rounded-2xl p-8 shadow-lg border">
                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground">AutoType Dashboard</h3>
                      <p className="text-muted-foreground">AI Document Creation Interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Revolutionize Document Creation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses who trust AutoType for their document automation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="px-10 py-6 text-lg font-semibold group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-semibold">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutoType;