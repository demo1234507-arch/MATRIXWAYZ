import Image from 'next/image';
import { Building2 } from 'lucide-react';

const processSteps = [
  {
    number: "1.",
    description: "We start by analyzing your workflows to identify tasks AI can automate and optimize.",
  },
  {
    number: "2.",
    description: "Next, we develop and integrate AI solutions into your workflows.",
  },
  {
    number: "3.",
    description: "Then, we continuously refine and improve your AI solutions.",
  },
];

const platformIcons = [
  {
    name: "Airtable",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/74XmvI3nqCZSBZRb7x42akkVxdU-15.png",
  },
  {
    name: "Notion",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/Tzow8DgXosUYukiCt4VilG6QPe0-17.png",
  },
  {
    name: "Zapier",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/GikctdLCXkZfLMo9KbT8smppYww-14.png",
  },
  {
    name: "OpenAI",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/2Iu80ZCxlqw5DR86kkhq2esSiA-16.png",
  },
  {
    name: "Facebook",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/K5WTKgKzp4tQKIue1nQkCDjrsJ8-18.png",
  },
];

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center rounded-lg border border-primary bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
    {children}
  </div>
);

const ProcessSection = () => {
  return (
    <section id="process" className="relative bg-background overflow-hidden py-[120px]">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255, 107, 26, 0.1) 0%, transparent Auralis-template-framer-website/40%), radial-gradient(circle at 90% 80%, rgba(255, 107, 26, 0.1) 0%, transparent 40%)',
        }}
      />
      <div 
        className="absolute inset-0 z-0 bg-repeat opacity-[0.03]"
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/3xrOr3qOQ8rY855y25vGgCAs.png")',
          backgroundSize: '300px 300px',
        }}
      />
      <div className="container max-w-7xl mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          <div className="flex flex-col items-start gap-6">
            <Badge>Process</Badge>
            <h2 className="text-5xl font-bold text-white -tracking-[0.02em]">Our process</h2>
            <div className="mt-6 flex flex-col gap-12">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <p className="text-[32px] leading-none font-semibold text-primary">{step.number}</p>
                  <p className="text-xl text-text-secondary leading-8 pt-1">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 font-primary min-h-[380px]">
            <div className="relative w-full h-full">
              <p className="text-white text-sm font-medium absolute top-4 right-4">Workflow Analysis</p>
              
              <div className="absolute top-[26px] right-[150px] h-px w-[calc(100%-420px)] bg-white/10"></div>

              <div className="flex items-center gap-2 bg-accent border border-white/10 rounded-lg py-3 px-4 absolute top-0 left-4">
                <Building2 className="w-5 h-5 text-text-secondary" />
                <p className="text-white text-sm font-medium">Your business</p>
              </div>

              <div className="absolute top-11 right-[65px] h-12 w-px bg-white/15"></div>

              <div className="absolute top-24 right-4 h-px w-[calc(100%-80px)] bg-white/15"></div>

              <div className="absolute top-32 w-full grid grid-cols-5 gap-x-2 px-2">
                {platformIcons.map((platform) => (
                  <div key={platform.name} className="relative flex flex-col items-center gap-2">
                    <div className="absolute bottom-full mb-2 h-6 w-px bg-white/15"></div>
                    <div className="bg-accent border border-white/10 rounded-lg w-16 h-16 flex items-center justify-center p-3">
                      <Image src={platform.icon} width={36} height={36} alt={platform.name} className="object-contain" />
                    </div>
                    <p className="text-xs text-text-secondary text-center">{platform.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;