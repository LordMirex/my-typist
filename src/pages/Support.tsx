
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Support = () => (
  <Layout>
    <SEO title="Support - MyTypist" description="Ticket and customer support portal" />
    <div className="max-w-2xl mx-auto py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Support</h1>
      <p className="text-gray-600 mb-8">For urgent support, email <a href="mailto:support@mytypist.com" className="text-brand-600 underline">support@mytypist.com</a>. Customer portal launching soon!</p>
    </div>
  </Layout>
);

export default Support;
