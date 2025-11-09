import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { Mic, FileText, Sparkles, MessageSquare, Workflow, LineChart } from "lucide-react";

const servicesData = [
  {
    title: "Custom AI Services",
    description: "We provide tailored AI solutions and services including chatbot development, voice assistants, workflow automations, and AI consulting to meet your unique business requirements.",
    icon: MessageSquare,
    features: [
      "Chatbot Development",
      "Voice Assistant Integration",
      "Custom AI Models",
      "Natural Language Processing",
      "Machine Learning Solutions"
    ]
  },
  {
    title: "Workflow Automations",
    description: "We streamline your processes with workflow automations that connect your favourite applications to eliminate repetitive tasks and enhance accuracy.",
    icon: Workflow,
    features: [
      "Process Automation",
      "Integration with Zapier, Airtable, Notion",
      "Custom API Development",
      "Data Synchronization",
      "Task Automation"
    ]
  },
  {
    title: "AI Consulting",
    description: "We dive into your organization to uncover AI-driven automation opportunities that can elevate your operational efficiency, quality, and speed, and reduce cost.",
    icon: LineChart,
    features: [
      "AI Strategy Development",
      "Process Analysis & Optimization",
      "Technology Stack Recommendations",
      "Implementation Roadmaps",
      "ROI Analysis"
    ]
  },
  {
    title: "Voice Assistants",
    description: "Build intelligent voice-powered assistants that can understand natural speech, respond contextually, and integrate seamlessly with your existing systems.",
    icon: Mic,
    features: [
      "Speech Recognition",
      "Voice Command Processing",
      "Multi-language Support",
      "Custom Voice Training",
      "Platform Integration"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,26,0.15),transparent_50%)]"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="flex flex-col items-center text-center gap-6 max-w-[900px] mx-auto">
            <div className="inline-block bg-accent border border-primary rounded-full px-4 py-1.5">
              <p className="text-sm font-medium text-accent-foreground">Our Services</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              AI Services That Transform Your Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[700px]">
              From custom AI development to workflow automation and consulting, we deliver comprehensive solutions tailored to your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-[24px] p-8 lg:p-10 flex flex-col gap-6 transition-all duration-300 hover:border-primary/70 hover:shadow-[0_8px_32px_rgba(255,140,58,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 border border-border rounded-xl p-6">
                    <h4 className="text-sm font-medium text-white mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,107,26,0.15),transparent_60%)]"></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="bg-card border border-border rounded-[24px] p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Let's discuss how our AI services can help you achieve your goals and drive innovation.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-primary to-orange-600 text-white text-base font-medium py-3 px-8 rounded-[12px] transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(255,140,58,0.3)]"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
