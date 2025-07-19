import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  
  // Mock articles data (in a real app, this would come from an API or context)
  const articles = [
    {
      id: 1,
      title: 'The Future of Document Automation: Trends to Watch in 2024',
      content: `
        <p>Document automation is rapidly evolving, and 2024 promises to bring revolutionary changes to how businesses handle their paperwork. As we move into an increasingly digital world, the demand for efficient, secure, and intelligent document processing solutions continues to grow.</p>
        
        <h2>Artificial Intelligence Integration</h2>
        <p>The integration of AI into document automation platforms is becoming more sophisticated. Machine learning algorithms can now understand context, extract relevant information, and even predict user needs. This means documents can be processed faster and with greater accuracy than ever before.</p>
        
        <h2>Enhanced Security Measures</h2>
        <p>With data breaches becoming more common, security has become a top priority. Modern document automation solutions are implementing advanced encryption, blockchain verification, and biometric authentication to ensure your sensitive information remains protected.</p>
        
        <h2>Cloud-First Approach</h2>
        <p>The shift to cloud-based solutions is accelerating. Cloud platforms offer better scalability, accessibility, and collaboration features. Teams can now work on documents from anywhere in the world while maintaining version control and security.</p>
        
        <h2>Mobile Optimization</h2>
        <p>As remote work becomes the norm, mobile-optimized document automation tools are essential. Users expect to be able to review, sign, and approve documents from their smartphones and tablets with the same ease as desktop computers.</p>
        
        <h2>Integration Capabilities</h2>
        <p>The future lies in seamless integration with existing business tools. Document automation platforms are developing robust APIs and integrations with CRM systems, project management tools, and communication platforms.</p>
        
        <p>These trends represent just the beginning of what's possible in document automation. As technology continues to advance, we can expect even more innovative solutions that will transform how businesses operate.</p>
      `,
      author: 'Sarah Johnson',
      date: 'December 10, 2024',
      category: 'Industry Insights',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'How E-Signatures Became Legally Binding: A Complete Guide',
      content: `
        <p>Electronic signatures have revolutionized the way we conduct business, but many people still wonder about their legal validity. Understanding the legal framework behind e-signatures is crucial for any business looking to modernize their document processes.</p>
        
        <h2>The Legal Foundation</h2>
        <p>The legal foundation for e-signatures was established with the Electronic Signatures in Global and National Commerce Act (ESIGN) of 2000 and the Uniform Electronic Transactions Act (UETA). These laws give electronic signatures the same legal weight as traditional handwritten signatures.</p>
        
        <h2>Key Requirements for Legal Validity</h2>
        <p>For an e-signature to be legally binding, several criteria must be met:</p>
        <ul>
          <li>Intent to sign: The signer must demonstrate clear intent to execute the document</li>
          <li>Consent to do business electronically: All parties must agree to use electronic signatures</li>
          <li>Clear association: The signature must be clearly associated with the signed document</li>
          <li>Record retention: The signed document must be stored and be available for future reference</li>
        </ul>
        
        <h2>Types of E-Signatures</h2>
        <p>There are different types of electronic signatures, each with varying levels of security and legal acceptance:</p>
        <ul>
          <li><strong>Simple Electronic Signatures:</strong> Basic electronic signatures like typed names or scanned handwritten signatures</li>
          <li><strong>Advanced Electronic Signatures:</strong> Signatures that uniquely identify the signer and detect any changes to the document</li>
          <li><strong>Qualified Electronic Signatures:</strong> The highest level of e-signature with strict identity verification requirements</li>
        </ul>
        
        <h2>International Considerations</h2>
        <p>While e-signatures are widely accepted, regulations vary by country. The EU's eIDAS regulation, for example, provides a framework for electronic signatures across European member states. Always check local laws when conducting international business.</p>
        
        <h2>Best Practices</h2>
        <p>To ensure your e-signatures hold up in court, follow these best practices:</p>
        <ul>
          <li>Use reputable e-signature platforms with proper audit trails</li>
          <li>Maintain detailed records of the signing process</li>
          <li>Ensure all parties understand what they're signing</li>
          <li>Keep signed documents in a secure, accessible format</li>
        </ul>
        
        <p>E-signatures are not just convenient; they're legally sound when implemented correctly. By understanding the legal framework and following best practices, businesses can confidently embrace digital transformation.</p>
      `,
      author: 'Michael Chen',
      date: 'December 8, 2024',
      category: 'Legal',
      readTime: '7 min read',
      featured: false
    },
    // Add more articles as needed...
  ];

  const article = articles.find(a => a.id === parseInt(id || ''));

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedArticles = articles.filter(a => 
    a.id !== article.id && 
    (a.category === article.category || a.featured)
  ).slice(0, 3);

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Back to Blog */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-white py-12 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="mb-4 bg-brand-600">{article.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/blog/${relatedArticle.id}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 group"
                  >
                    <Badge variant="outline" className="mb-3">
                      {relatedArticle.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{relatedArticle.author}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedArticle.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Article;