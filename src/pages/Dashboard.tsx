
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  PenTool, 
  Plus, 
  Clock, 
  CheckCircle, 
  Users, 
  TrendingUp,
  Search,
  Filter
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Documents Created',
      value: '24',
      change: '+12%',
      icon: FileText,
      color: 'text-brand-600'
    },
    {
      title: 'Signatures Pending',
      value: '3',
      change: '-2',
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      title: 'Completed This Month',
      value: '18',
      change: '+8',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Team Members',
      value: '1',
      change: '0',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  const recentDocuments = [
    {
      id: 1,
      name: 'Service Agreement - TechCorp',
      type: 'Contract',
      status: 'Pending Signature',
      date: 'Dec 10, 2024',
      progress: 75
    },
    {
      id: 2,
      name: 'Invoice #2024-001',
      type: 'Invoice',
      status: 'Completed',
      date: 'Dec 8, 2024',
      progress: 100
    },
    {
      id: 3,
      name: 'NDA - New Client',
      type: 'Legal',
      status: 'Draft',
      date: 'Dec 7, 2024',
      progress: 50
    },
    {
      id: 4,
      name: 'Proposal - Website Design',
      type: 'Proposal',
      status: 'Sent',
      date: 'Dec 5, 2024',
      progress: 80
    }
  ];

  const quickActions = [
    {
      title: 'Create Document',
      description: 'Start with a template or from scratch',
      icon: FileText,
      action: '/create-document',
      color: 'bg-brand-600'
    },
    {
      title: 'Send for Signature',
      description: 'Upload and get documents signed',
      icon: PenTool,
      action: '/send-signature',
      color: 'bg-blue-600'
    },
    {
      title: 'Browse Templates',
      description: 'Explore our template library',
      icon: Search,
      action: '/templates',
      color: 'bg-green-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending Signature':
        return 'bg-yellow-100 text-yellow-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Sent':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 animate-fade-in">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening with your documents.</p>
              </div>
              <Button className="bg-brand-600 hover:bg-brand-700">
                <Plus className="w-4 h-4 mr-2" />
                New Document
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card 
                key={stat.title}
                className="hover:shadow-lg transition-shadow animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Documents */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold">Recent Documents</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentDocuments.map((doc, index) => (
                      <div 
                        key={doc.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer animate-slide-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-brand-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{doc.name}</h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-sm text-gray-500">{doc.type}</span>
                              <span className="text-gray-300">•</span>
                              <span className="text-sm text-gray-500">{doc.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={getStatusColor(doc.status)}>
                            {doc.status}
                          </Badge>
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-2 bg-brand-600 rounded-full transition-all duration-300"
                              style={{ width: `${doc.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <button
                        key={action.title}
                        className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all duration-200 animate-slide-in"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                            <action.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{action.title}</h4>
                            <p className="text-sm text-gray-500">{action.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upgrade Prompt */}
              <Card className="mt-6 bg-gradient-to-br from-brand-50 to-brand-100">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-brand-900 mb-2">Upgrade to Professional</h3>
                    <p className="text-sm text-brand-700 mb-4">
                      Get unlimited documents, advanced templates, and priority support.
                    </p>
                    <Button className="bg-brand-600 hover:bg-brand-700 text-white">
                      Upgrade Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
