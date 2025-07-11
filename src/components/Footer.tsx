
import { Link } from 'react-router-dom';
import { FileText, PenTool } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="section-container section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Enhanced Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="flex items-center space-x-1 p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <FileText className="h-8 w-8 text-primary" />
                <PenTool className="h-6 w-6 text-primary-glow" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">MyTypist</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md text-lg leading-relaxed">
              Transform your document workflow with AI-powered automation and legally binding e-signatures. 
              Trusted by 10,000+ businesses worldwide.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                <span className="text-primary font-semibold text-sm">SOC 2 Certified</span>
              </div>
              <div className="px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-green-400 font-semibold text-sm">99.9% Uptime</span>
              </div>
            </div>
            <div className="text-sm text-slate-400 font-medium">
              © 2024 MyTypist. All rights reserved.
            </div>
          </div>

          {/* Enhanced Product Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/pricing" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>Pricing</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/how-to-use" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>How to Use</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>Templates</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>FAQ</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>Blog</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Enhanced Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>About Us</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>Contact</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/become-partner" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>Partners</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>Support</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/legals" className="text-slate-300 hover:text-primary transition-colors duration-200 text-base font-medium flex items-center group">
                  <span>Legal</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Enhanced bottom section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-slate-400 font-medium">Stay connected:</span>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold">tw</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold">li</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold">gh</span>
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-slate-400">
              <Link to="/legals" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/legals" className="hover:text-primary transition-colors">Terms of Service</Link>
              <span>Made with ❤️ for better workflows</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
