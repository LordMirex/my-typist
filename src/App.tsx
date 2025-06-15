
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import HowToUse from "./pages/HowToUse";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import CreateDocument from "./pages/CreateDocument";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// New pages
import BecomePartner from "./pages/BecomePartner";
import Legals from "./pages/Legals";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Bonuses from "./pages/Bonuses";
import Analytics from "./pages/Analytics";
import AdminUploadTemplate from "./pages/AdminUploadTemplate";

// TODO: Replace with real global auth state/provider!
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/create-document" element={<CreateDocument />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/upload-template" element={<AdminUploadTemplate />} />
            <Route path="/profile" element={<Profile />} />

            {/* New Pages */}
            <Route path="/become-partner" element={<BecomePartner />} />
            <Route path="/legals" element={<Legals />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/bonuses" element={<Bonuses />} />
            <Route path="/analytics" element={<Analytics />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
