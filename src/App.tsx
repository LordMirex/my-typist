
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";

// Import critical pages directly (no lazy loading)
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Lazy load all other pages for better performance
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const HowToUse = lazy(() => import("./pages/HowToUse"));
const Blog = lazy(() => import("./pages/Blog"));
const FAQ = lazy(() => import("./pages/FAQ"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Templates = lazy(() => import("./pages/Templates"));
const CreateDocument = lazy(() => import("./pages/CreateDocument"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BecomePartner = lazy(() => import("./pages/BecomePartner"));
const Legals = lazy(() => import("./pages/Legals"));
const Support = lazy(() => import("./pages/Support"));
const Settings = lazy(() => import("./pages/Settings"));
const Bonuses = lazy(() => import("./pages/Bonuses"));
const Analytics = lazy(() => import("./pages/Analytics"));
const AdminUploadTemplate = lazy(() => import("./pages/AdminUploadTemplate"));

// Enhanced loading component with MyTypist branding
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-blue-50">
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-brand-200 rounded-full animate-spin border-t-brand-600"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-pulse border-t-blue-400"></div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-brand-600 mb-1">MyTypist</h3>
        <p className="text-sm text-gray-500">Loading your workspace...</p>
      </div>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/how-to-use" element={<HowToUse />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/create-document" element={<CreateDocument />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/upload-template" element={<AdminUploadTemplate />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/become-partner" element={<BecomePartner />} />
              <Route path="/legals" element={<Legals />} />
              <Route path="/support" element={<Support />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/bonuses" element={<Bonuses />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
