"use client";

import Image from "next/image";
import { Linkedin, PlusCircle } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "\"Working with this AI solutions team transformed our customer service operations. The voice assistant handles thousands of queries daily with impressive accuracy.\"",
    name: "Sarah M.",
    title: "Head of Operations - Tech Company",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/P9X3S4s8LpHIo3brnqvPdgpSSM-21.jpeg",
  },
  {
    id: 2,
    quote:
      "\"The workflow automation solutions exceeded our expectations. We've seen a 40% reduction in manual tasks and significant cost savings within the first quarter.\"",
    name: "Michael T.",
    title: "VP of Technology - Enterprise Client",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/fivxG3PMVY39xwbNhCrAyXWcuQ-20.jpeg",
  },
  {
    id: 3,
    quote:
      "\"Their AI consulting helped us identify opportunities we hadn't considered. The custom chatbot solution has dramatically improved our customer engagement metrics.\"",
    name: "Jennifer L.",
    title: "Digital Director - E-commerce Brand",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/BRtafgebyzRM7MDNqA2sIwztpvs-22.jpeg",
  },
  {
    id: 4,
    quote:
      "\"Professional team that delivers results. The AI implementation was smooth, and their ongoing support has been exceptional. Highly recommend their services.\"",
    name: "David R.",
    title: "COO - Financial Services",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/9XnPTCc8r4uMOaihtGr74UlqXE-23.jpeg",
  },
  {
    id: 5,
    quote:
      "\"The automated solutions have freed up our team to focus on strategic initiatives. ROI was evident within weeks of implementation.\"",
    name: "Rachel K.",
    title: "CEO - Growing Startup",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/P9X3S4s8LpHIo3brnqvPdgpSSM-21.jpeg",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex flex-col justify-between flex-shrink-0 w-[420px] md:w-[450px] h-[360px] p-8 mx-4 rounded-2xl border border-white/5 bg-secondary/30 backdrop-blur-lg shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
    <div className="flex-grow">
      <div className="flex items-center gap-3">
        <PlusCircle className="text-foreground" size={28} />
        <span className="text-xl font-medium text-foreground">Client Company</span>
      </div>
      <p className="mt-6 text-lg text-foreground leading-relaxed">
        {testimonial.quote}
      </p>
    </div>
    <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
      <button 
        onClick={(e) => e.preventDefault()} 
        aria-label="LinkedIn profile (placeholder)" 
        className="text-muted-foreground hover:text-primary transition-colors cursor-not-allowed opacity-50"
        title="Placeholder - Real testimonials coming soon"
      >
        <Linkedin size={24} />
      </button>
    </div>
  </div>
);

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <section id="reviews" className="relative w-full py-24 sm:py-32 overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] w-full max-w-6xl mx-auto bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(255,140,58,0.1),transparent)]"></div>

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-lg border border-primary/50 bg-accent px-4 py-2 text-sm font-medium text-primary">
            Reviews
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Here's what our clients say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear the success stories of the businesses we've helped thrive with AI.
          </p>
          <p className="text-sm text-muted-foreground/70 italic">
            * Sample testimonials - Replace with real client feedback
          </p>
        </div>

        <div className="relative mt-16">
          <div 
            className="w-full overflow-hidden" 
            style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
          >
            <div className="flex w-max animate-scroll">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * (450px + 32px) * ${testimonialsData.length})); }
        }
        .animate-scroll {
          animation: scroll 90s linear infinite;
        }
        @media (max-width: 768px) {
          @keyframes scroll {
             0% { transform: translateX(0); }
             100% { transform: translateX(calc(-1 * (420px + 32px) * ${testimonialsData.length})); }
           }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;