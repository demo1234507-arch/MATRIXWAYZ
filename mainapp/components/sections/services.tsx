"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, FileText, Mic } from "lucide-react";

const servicesData = [
  {
    title: "AI Products",
    description: "We develop and release our own AI-powered products designed to solve real-world business challenges. Our products leverage cutting-edge machine learning and artificial intelligence to deliver measurable value.",
    demo: <ChatbotDemo />,
  },
  {
    title: "Custom AI Services",
    description: "We provide tailored AI solutions and services including chatbot development, voice assistants, workflow automations, and AI consulting to meet your unique business requirements.",
    demo: <VoiceAssistantDemo />,
  },
  {
    title: "Workflow Automations",
    description: "We streamline your processes with workflow automations that connect your favourite applications to eliminate repetitive tasks and enhance accuracy.",
    demo: <WorkflowAutomationsDemo />,
  },
  {
    title: "AI Consulting",
    description: "We dive into your organization to uncover AI-driven automation opportunities that can elevate your operational efficiency, quality, and speed, and reduce cost.",
    demo: <AiConsultingDemo />,
  },
];

const ServiceCard = ({ title, description, demo }: { title: string; description: string; demo: React.ReactNode }) => (
  <div className="bg-card border border-border rounded-[24px] p-8 lg:p-10 flex flex-col gap-8 transition-all duration-300 hover:border-primary/70 hover:shadow-[0_8px_32px_rgba(255,140,58,0.1)]">
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
    {demo}
  </div>
);

function ChatbotDemo() {
  const barHeights = [20, 30, 40, 50, 80, 60, 45, 35, 25, 15, 28, 38];

  return (
    <div className="bg-black/40 border border-border rounded-xl p-6 flex flex-col justify-between gap-4 h-[300px]">
      <div>
        <div className="flex items-center gap-2">
          <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/nRcHj3LtGEm9jnSCjyDrCq5WQo-7.png" alt="User" width={28} height={28} className="rounded-full object-cover" />
          <p className="font-medium text-sm text-white">You:</p>
        </div>
        <div className="mt-2 bg-accent border border-border rounded-lg p-3 flex justify-between items-center">
          <p className="text-sm text-foreground">Please create a graph of the profits in this file</p>
          <FileText className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center bg-primary/10 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <p className="font-medium text-sm bg-gradient-to-r from-white to-primary text-transparent bg-clip-text">AI Assistant</p>
        </div>
        <div className="bg-accent border border-border rounded-lg p-4">
          <p className="text-sm text-foreground mb-4">Of course! Here's a graph based on the profits in the file you provided.</p>
          <div className="flex items-end gap-[2.5px] h-20 w-full">
            {barHeights.map((height, index) => (
              <div key={index} className="flex-1 group" style={{ height: `${height}%` }}>
                {index === 4 ? (
                  <div className="h-full w-full bg-gradient-to-t from-primary to-orange-400 rounded-sm" />
                ) : (
                  <div className="h-full w-full bg-zinc-700/50 group-hover:bg-zinc-600/50 rounded-sm transition-colors" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VoiceAssistantDemo() {
  const waveBars = Array.from({ length: 40 }, () => Math.random() * 80 + 10);
  return (
    <div className="bg-black/40 border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 h-[300px] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-px">
        {waveBars.map((height, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-primary/20 via-primary/80 to-primary/20 rounded-full"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="bg-black/50 backdrop-blur-sm border border-primary/50 rounded-full p-5">
           <Mic className="w-6 h-6 text-primary" />
        </div>
        <p className="text-sm font-medium text-white">Voice Assistant</p>
      </div>
    </div>
  );
}

function WorkflowAutomationsDemo() {
  const automationSteps = [
    { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/FCIhg4w8Oic6PzzMBeFQQ09s200-12.png", text: "New Framer form submission" },
    { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/1XGIQQw3JsnYCxEJjuNAhpJ2Q-8.png", text: "Format & clean lead data in Zapier" },
    { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/A0QzU4JPTefwhiQBXSsh5ia9n0-9.png", text: "Add lead to Airtable database" },
  ];
  return (
    <div className="bg-black/40 border border-border rounded-xl p-6 flex flex-col justify-between h-[300px]">
      <div className="flex flex-col gap-3">
        {automationSteps.map((step, index) => (
          <div key={index} className="bg-accent border border-border rounded-lg p-3 flex items-center gap-4">
            <span className="text-sm font-mono text-muted-foreground">{index + 1}.</span>
            <Image src={step.icon} alt="" width={20} height={20} className="filter contrast-0 brightness-[5]" />
            <p className="text-sm text-foreground">{step.text}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-success">Workflow successfully automated!</p>
    </div>
  );
}

function AiConsultingDemo() {
  const dataPoints = [
    { x: '10%', y: '70%' }, { x: '25%', y: '55%' }, { x: '40%', y: '60%' },
    { x: '58%', y: '45%' }, { x: '75%', y: '30%' }, { x: '90%', y: '20%' },
  ];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <div className="bg-black/40 border border-border rounded-xl p-6 flex flex-col justify-between h-[300px] relative">
      <div className="absolute inset-x-6 top-6 bottom-12 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:calc(100%/5)_calc(100%/4)] opacity-30"></div>
      
      <div className="relative flex-grow">
        <div className="absolute top-2 left-2 flex flex-col gap-2 text-xs">
          <p className="text-success">Efficiency <span className="font-bold">+46%</span></p>
          <p className="text-destructive">Cost <span className="font-bold">-11%</span></p>
        </div>
        {dataPoints.map((point, i) => (
          <div
            key={i}
            className="absolute w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-primary/30 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: point.x, top: point.y }}
          />
        ))}
         <svg className="absolute inset-0 w-full h-full" overflow={'visible'}>
          <polyline
            points="29,158 68,124 105,135 148,101 189,68 225,45"
            fill="none"
            stroke="url(#line-gradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-primary)" />
            </linearGradient>
          </defs>
        </svg>

      </div>
      
      <div className="flex justify-between text-xs text-muted-foreground pt-2 z-10">
        {months.map(month => <span key={month}>{month}</span>)}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 sm:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div className="inline-block bg-accent border border-primary rounded-full px-4 py-1.5">
            <p className="text-sm font-medium text-accent-foreground">Solutions</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our Products & Services
          </h2>
          <p className="mt-4 max-w-[700px] text-center text-base text-muted-foreground">
            MATRIXWAYZ offers both ready-to-use AI products and custom service-based solutions. We build innovative products for market release while delivering tailored AI implementations for enterprise clients.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}