import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Sparkles, Zap, TrendingUp, Shield, Cpu, Bot } from "lucide-react";

const productsData = [
  {
    title: "AI Chatbot Pro",
    description: "An intelligent conversational AI platform that understands context, learns from interactions, and provides human-like responses. Perfect for customer support, lead generation, and user engagement.",
    icon: Bot,
    status: "Available Now",
    features: [
      "Natural Language Understanding",
      "Multi-language Support",
      "Integration with 50+ Platforms",
      "Analytics Dashboard",
      "Custom Training Options",
      "24/7 Automated Support"
    ],
    pricing: "Starting at $297/month"
  },
  {
    title: "WorkflowAI",
    description: "Automate your business processes with our intelligent workflow automation platform. Connect your apps, streamline operations, and eliminate manual tasks with AI-powered decision making.",
    icon: Zap,
    status: "Available Now",
    features: [
      "Visual Workflow Builder",
      "AI-Powered Decision Trees",
      "500+ Pre-built Integrations",
      "Real-time Monitoring",
      "Custom Logic Rules",
      "Error Handling & Alerts"
    ],
    pricing: "Starting at $497/month"
  },
  {
    title: "VoiceAI Assistant",
    description: "Next-generation voice assistant that understands natural speech patterns and responds intelligently. Ideal for call centers, virtual receptionists, and voice-enabled applications.",
    icon: Cpu,
    status: "Beta Access",
    features: [
      "Advanced Speech Recognition",
      "Contextual Understanding",
      "Voice Cloning Technology",
      "Multi-accent Support",
      "Call Analytics",
      "CRM Integration"
    ],
    pricing: "Coming Q2 2025"
  },
  {
    title: "InsightAI Analytics",
    description: "Transform your data into actionable insights with our AI-powered analytics platform. Get predictive analytics, trend forecasting, and automated reporting.",
    icon: TrendingUp,
    status: "Coming Soon",
    features: [
      "Predictive Analytics",
      "Automated Report Generation",
      "Data Visualization",
      "Anomaly Detection",
      "Custom Dashboards",
      "API Access"
    ],
    pricing: "Q3 2025"
  },
  {
    title: "SecureAI Guard",
    description: "Protect your systems with AI-powered security monitoring. Detect threats, prevent breaches, and ensure compliance with intelligent security automation.",
    icon: Shield,
    status: "In Development",
    features: [
      "Threat Detection",
      "Real-time Monitoring",
      "Automated Response",
      "Compliance Reporting",
      "Vulnerability Scanning",
      "Incident Analysis"
    ],
    pricing: "Q4 2025"
  },
  {
    title: "ContentAI Studio",
    description: "Generate high-quality content at scale with our AI content creation platform. From blog posts to social media, create engaging content in minutes.",
    icon: Sparkles,
    status: "Beta Testing",
    features: [
      "Multi-format Content Generation",
      "SEO Optimization",
      "Brand Voice Training",
      "Image Generation",
      "Content Calendar",
      "Performance Analytics"
    ],
    pricing: "Starting at $197/month"
  }
];

const statusColors: Record<string, string> = {
  "Available Now": "bg-success/10 text-success border-success/30",
  "Beta Access": "bg-primary/10 text-primary border-primary/30",
  "Coming Soon": "bg-muted/10 text-muted-foreground border-muted/30",
  "In Development": "bg-muted/10 text-muted-foreground border-muted/30",
  "Beta Testing": "bg-primary/10 text-primary border-primary/30"
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,26,0.15),transparent_50%)]"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="flex flex-col items-center text-center gap-6 max-w-[900px] mx-auto">
            <div className="inline-block bg-accent border border-primary rounded-full px-4 py-1.5">
              <p className="text-sm font-medium text-accent-foreground">Our Products</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              AI Products Built for Growth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[700px]">
              Discover our suite of AI-powered products designed to solve real-world business challenges. From automation to analytics, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productsData.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-[24px] p-8 lg:p-10 flex flex-col gap-6 transition-all duration-300 hover:border-primary/70 hover:shadow-[0_8px_32px_rgba(255,140,58,0.1)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-primary/10 border border-primary/30 rounded-xl p-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-2">{product.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full border text-xs font-medium whitespace-nowrap ${statusColors[product.status]}`}>
                      {product.status}
                    </div>
                  </div>
                  
                  <div className="bg-black/40 border border-border rounded-xl p-6 flex-1">
                    <h4 className="text-sm font-medium text-white mb-4">Features:</h4>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-primary">{product.pricing}</p>
                    </div>
                  </div>

                  {product.status === "Available Now" && (
                    <a
                      href="#contact"
                      className="w-full text-center bg-gradient-to-r from-primary to-orange-600 text-white text-base font-medium py-3 px-6 rounded-[12px] transition-all duration-300 hover:brightness-110"
                    >
                      Get Started
                    </a>
                  )}
                  {(product.status === "Beta Access" || product.status === "Beta Testing") && (
                    <a
                      href="#contact"
                      className="w-full text-center bg-secondary text-white text-base font-medium py-3 px-6 rounded-[12px] border border-primary transition-colors duration-300 hover:bg-primary/10"
                    >
                      Request Beta Access
                    </a>
                  )}
                  {(product.status === "Coming Soon" || product.status === "In Development") && (
                    <button
                      disabled
                      className="w-full text-center bg-secondary/50 text-muted-foreground text-base font-medium py-3 px-6 rounded-[12px] border border-border cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,26,0.15),transparent_60%)]"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="bg-card border border-border rounded-[24px] p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Our products can be customized to fit your specific needs. Let's discuss how we can tailor them for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-primary to-orange-600 text-white text-base font-medium py-3 px-8 rounded-[12px] transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(255,140,58,0.3)]"
              >
                Contact Sales
              </a>
              <a
                href="/services"
                className="inline-block bg-secondary text-white text-base font-medium py-3 px-8 rounded-[12px] border border-primary transition-colors duration-300 hover:bg-primary/10"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
