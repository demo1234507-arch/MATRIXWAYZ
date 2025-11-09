'use client';

import React, { useState, ComponentType } from 'react';
import { ShoppingCart, Home, Briefcase, RefreshCw, HeartPulse, GraduationCap, Truck, Zap, Tractor, Car, Film, Phone, Factory, Plane, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definitions ---
interface ServiceDetail {
  name: string;
  value: string;
  tech?: string;
}

interface CardData {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details?: ServiceDetail[];
}

interface IndustryData {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  cards: CardData[];
}

// --- Data ---
const industriesData: IndustryData[] = [
  {
    id: 'education',
    label: 'Education',
    icon: GraduationCap,
    cards: [
      {
        icon: GraduationCap,
        title: 'Adaptive Learning Engine',
        description: 'Personalized lesson plans that improve completion rates using user modeling, knowledge tracing, and recommendation models.',
        details: [
          { name: 'Value', value: 'Improved completion & engagement rates, measurable learning gains' },
          { name: 'Tech', value: 'User modeling, BKT/DKT, recommendation models, feature store' },
        ]
      },
      {
        icon: Briefcase,
        title: 'Automated Grading & Feedback',
        description: 'AI-powered grading for code, essays, and MCQs with plagiarism detection and automated feedback generation.',
        details: [
          { name: 'Value', value: 'Reduced grading time, consistent feedback, improved accuracy' },
          { name: 'Tech', value: 'LLMs, program execution sandboxes, rubrics, plagiarism detection' },
        ]
      },
      {
        icon: Zap,
        title: 'Virtual Labs & Simulators',
        description: 'Interactive virtual labs and simulators for hands-on learning with real-time telemetry and experiment templates.',
        details: [
          { name: 'Value', value: 'Enhanced learning outcomes, cost-effective lab access' },
          { name: 'Tech', value: 'WebGL/Unity, backend state sync, telemetry' },
        ]
      },
    ],
  },
  {
    id: 'logistics',
    label: 'Logistics',
    icon: Truck,
    cards: [
      {
        icon: Truck,
        title: 'Route Optimization & Dynamic ETAs',
        description: 'Optimized routing with real-time traffic integration and ML-powered ETA predictions for improved delivery performance.',
        details: [
          { name: 'Value', value: 'Fuel/time savings, improved on-time delivery rates' },
          { name: 'Tech', value: 'Graph algorithms, vehicle routing, real-time traffic API, ML ETA models' },
        ]
      },
      {
        icon: RefreshCw,
        title: 'Demand Forecasting & Inventory',
        description: 'Time-series forecasting with inventory optimization to reduce stockouts and improve inventory management.',
        details: [
          { name: 'Value', value: 'Reduced stockouts, optimized inventory levels' },
          { name: 'Tech', value: 'Prophet/transformers, optimization engine' },
        ]
      },
      {
        icon: Zap,
        title: 'Dock & Yard Automation',
        description: 'Computer vision-powered gate scanning with RFID integration for automated dock and yard operations.',
        details: [
          { name: 'Value', value: 'Reduced gate time, increased throughput' },
          { name: 'Tech', value: 'CV for gate scanning, RFID, event-driven architecture' },
        ]
      },
    ],
  },
  {
    id: 'energy',
    label: 'Energy',
    icon: Zap,
    cards: [
      {
        icon: Zap,
        title: 'Grid Load Forecasting',
        description: 'Time-series ML for grid load forecasting with demand response integration and peak shaving optimization.',
        details: [
          { name: 'Value', value: 'Improved forecast accuracy, peak shaving achievements' },
          { name: 'Tech', value: 'Time-series ML, anomaly detection, streaming data (Kafka)' },
        ]
      },
      {
        icon: RefreshCw,
        title: 'Solar/Wind Performance Monitoring',
        description: 'SCADA integration with predictive maintenance models for renewable energy asset monitoring.',
        details: [
          { name: 'Value', value: 'Reduced downtime, improved yield' },
          { name: 'Tech', value: 'SCADA ingest, anomaly detection, predictive maintenance' },
        ]
      },
      {
        icon: Home,
        title: 'Energy Efficiency Advisor',
        description: 'Digital twin-based building simulation for retrofit scenario analysis and ROI optimization.',
        details: [
          { name: 'Value', value: 'Energy savings projections, optimized payback periods' },
          { name: 'Tech', value: 'Building twin, simulation engine, optimization' },
        ]
      },
    ],
  },
  {
    id: 'agriculture',
    label: 'Agriculture',
    icon: Tractor,
    cards: [
      {
        icon: Tractor,
        title: 'Precision Farming',
        description: 'Satellite imagery analysis with CV for crop health monitoring and yield prediction using multispectral data.',
        details: [
          { name: 'Value', value: 'Improved yield prediction accuracy, optimized intervention ROI' },
          { name: 'Tech', value: 'Satellite imagery, CV, multispectral analysis, yield models' },
        ]
      },
      {
        icon: Zap,
        title: 'Farm Automation & Robotics',
        description: 'Robot control systems with CV-powered weed detection and autonomous task scheduling.',
        details: [
          { name: 'Value', value: 'Reduced manual labor, increased throughput' },
          { name: 'Tech', value: 'ROS/robot control, CV for weed detection' },
        ]
      },
      {
        icon: RefreshCw,
        title: 'Supply Chain Traceability',
        description: 'Blockchain and IoT-powered traceability for farm-to-consumer tracking with QR/IoT tagging.',
        details: [
          { name: 'Value', value: 'Complete traceability coverage, fast trace times' },
          { name: 'Tech', value: 'Lightweight ledger, QR/IoT tagging' },
        ]
      },
    ],
  },
  {
    id: 'automotive',
    label: 'Automotive',
    icon: Car,
    cards: [
      {
        icon: Car,
        title: 'Fleet Telematics & Predictive Maintenance',
        description: 'OBD-II/CAN data analysis with time-series models for predictive maintenance and breakdown prevention.',
        details: [
          { name: 'Value', value: 'Reduced breakdowns, lower maintenance costs' },
          { name: 'Tech', value: 'OBD-II/CAN data ingest, time-series models, edge alerts' },
        ]
      },
      {
        icon: Zap,
        title: 'ADAS Data Annotation Platform',
        description: 'Annotation tools with model training pipelines for autonomous driving dataset management.',
        details: [
          { name: 'Value', value: 'High mAP scores, optimized inference latency' },
          { name: 'Tech', value: 'Annotation tool, model training pipelines' },
        ]
      },
      {
        icon: RefreshCw,
        title: 'Mobility-as-a-Service Orchestration',
        description: 'Dynamic pricing and matching algorithms with surge pricing for ride-sharing optimization.',
        details: [
          { name: 'Value', value: 'Improved utilization, reduced wait times' },
          { name: 'Tech', value: 'Matching algorithms, surge pricing, real-time optimization' },
        ]
      },
    ],
  },
  {
    id: 'media',
    label: 'Media & AdTech',
    icon: Film,
    cards: [
      {
        icon: Film,
        title: 'Automated Content Tagging',
        description: 'Multimodal embeddings with speech-to-text for automated content tagging and summarization.',
        details: [
          { name: 'Value', value: 'Improved discoverability, faster time-to-publish' },
          { name: 'Tech', value: 'Multimodal embeddings, speech-to-text, topic models' },
        ]
      },
      {
        icon: RefreshCw,
        title: 'Streaming Personalization',
        description: 'Collaborative filtering with contextual bandits for personalized content recommendations.',
        details: [
          { name: 'Value', value: 'Increased watch time, reduced churn' },
          { name: 'Tech', value: 'Collaborative filtering, contextual bandits, online serving' },
        ]
      },
      {
        icon: Zap,
        title: 'Ad Targeting & Creative Optimization',
        description: 'Uplift modeling with multi-armed bandits for automated creative testing and optimization.',
        details: [
          { name: 'Value', value: 'Higher CTR/CVR, reduced CPA' },
          { name: 'Tech', value: 'Uplift modeling, MAB frameworks, creative analytics' },
        ]
      },
    ],
  },
  {
    id: 'telecom',
    label: 'Telecom',
    icon: Phone,
    cards: [
      {
        icon: Phone,
        title: 'Network Fault Detection',
        description: 'Near-real-time streaming telemetry with anomaly detection and graph correlation for root-cause analysis.',
        details: [
          { name: 'Value', value: 'Reduced MTTR, lower alert noise' },
          { name: 'Tech', value: 'Streaming telemetry, anomaly detection, graph correlation' },
        ]
      },
      {
        icon: RefreshCw,
        title: 'Customer Experience Analytics',
        description: 'Speech-to-text with sentiment and intent analysis for call transcript analytics.',
        details: [
          { name: 'Value', value: 'Improved NPS, faster issue resolution' },
          { name: 'Tech', value: 'Speech-to-text, sentiment & intent models' },
        ]
      },
      {
        icon: Zap,
        title: 'Cloud Cost Optimization',
        description: 'Infrastructure scanning with cost modeling and autoscaling tuning for cloud optimization.',
        details: [
          { name: 'Value', value: 'Significant cost savings, maintained performance' },
          { name: 'Tech', value: 'Infra scanning, cost models, autoscaling tuning' },
        ]
      },
    ],
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    icon: Factory,
    cards: [
      {
        icon: Factory,
        title: 'Process Optimization via Digital Thread',
        description: 'MES integration with time-series analytics and process mining for manufacturing optimization.',
        details: [
          { name: 'Value', value: 'Reduced cycle time, improved yield' },
          { name: 'Tech', value: 'MES integration, time-series analytics, process mining' },
        ]
      },
      {
        icon: Zap,
        title: 'Low-code Automation',
        description: 'BPM/workflow engine with PLC/ERP connectors for plant workflow automation.',
        details: [
          { name: 'Value', value: 'Reduced manual touchpoints, increased throughput' },
          { name: 'Tech', value: 'BPM/workflow engine, PLC/ERP connectors, RPA' },
        ]
      },
      {
        icon: RefreshCw,
        title: 'Quality Predictors from Sensor Fusion',
        description: 'Multimodal sensor fusion for predictive quality control from vibration, temperature, and image data.',
        details: [
          { name: 'Value', value: 'Higher defect prevention rate, lower false alarms' },
          { name: 'Tech', value: 'Multimodal sensor fusion (vibration, temp, image)' },
        ]
      },
    ],
  },
  {
    id: 'travel',
    label: 'Travel & Hospitality',
    icon: Plane,
    cards: [
      {
        icon: Plane,
        title: 'Dynamic Pricing for Properties',
        description: 'Demand forecasting with price elasticity models and competitor scraping for revenue optimization.',
        details: [
          { name: 'Value', value: 'Improved RevPAR, increased occupancy' },
          { name: 'Tech', value: 'Demand forecasting, price elasticity models, competitor scraping' },
        ]
      },
      {
        icon: RefreshCw,
        title: 'Conversational Concierge',
        description: 'RAG-powered chatbots with PMS/CRS integration for guest personalization and support.',
        details: [
          { name: 'Value', value: 'Higher guest satisfaction, improved automation rate' },
          { name: 'Tech', value: 'RAG for property info, PMS/CRS integrations, multichannel bots' },
        ]
      },
      {
        icon: Zap,
        title: 'Operations Automation',
        description: 'Scheduling optimizer with occupancy sensors and CV for housekeeping and turnover prediction.',
        details: [
          { name: 'Value', value: 'Reduced labor costs, improved room readiness' },
          { name: 'Tech', value: 'Scheduling optimizer, occupancy sensors, CV for room checks' },
        ]
      },
    ],
  },
  {
    id: 'insurance',
    label: 'Insurance',
    icon: Shield,
    cards: [
      {
        icon: Shield,
        title: 'Automated Claims Triage',
        description: 'CV-powered claims image analysis with fraud detection using anomaly detection and graph analysis.',
        details: [
          { name: 'Value', value: 'Faster claim processing, higher fraud detection rate' },
          { name: 'Tech', value: 'CV for claims images, anomaly detection, graph analysis' },
        ]
      },
      {
        icon: RefreshCw,
        title: 'Risk Modeling & Pricing',
        description: 'Survival analysis with GLMs + ML for personalized insurance pricing and risk assessment.',
        details: [
          { name: 'Value', value: 'Optimized loss ratios, faster quote-to-bind' },
          { name: 'Tech', value: 'Survival analysis, GLMs + ML, feature stores' },
        ]
      },
      {
        icon: Zap,
        title: 'Customer Onboarding with ID Verification',
        description: 'OCR with liveness checks and telematics-driven underwriting for streamlined onboarding.',
        details: [
          { name: 'Value', value: 'Higher onboarding conversion, improved underwriting accuracy' },
          { name: 'Tech', value: 'OCR, liveness checks, telematics ingestion' },
        ]
      },
    ],
  },
];

const NOISE_TEXTURE_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/1q1rRFupGEOKUT9tEzM2tigdYP0-19.png";

export default function Industries() {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);

  const activeIndustry = industriesData.find((industry) => industry.id === activeTab);

  return (
    <section id="industries" className="relative overflow-hidden bg-background py-[120px]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_10%_100%,rgba(255,140,58,0.1),transparent)]" />
      <div 
        className="pointer-events-none absolute inset-0 -z-20 size-full bg-repeat opacity-[0.03]"
        style={{ backgroundImage: `url(${NOISE_TEXTURE_URL})` }}
      />
      
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-block">
            <div className="rounded-lg border border-primary bg-accent px-4 py-1.5">
              <p className="text-sm font-medium text-primary">Industries</p>
            </div>
          </div>
          <h2 className="text-5xl font-bold tracking-tighter text-white">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            MATRIXWAYZ provides specialized AI solutions across diverse industries. Explore our tailored services for your sector.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-8 lg:gap-x-10">
          {industriesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="group relative flex flex-col items-center gap-2 px-2 py-1 transition-colors"
            >
              <tab.icon className={`size-6 transition-colors ${activeTab === tab.id ? 'text-white' : 'text-muted-foreground group-hover:text-white'}`} strokeWidth={1.5}/>
              <span className={`text-sm font-medium transition-colors ${activeTab === tab.id ? 'text-white' : 'text-muted-foreground group-hover:text-white'}`}>
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <motion.div
                  className="absolute -bottom-2 h-[2px] w-full bg-primary"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {activeIndustry?.cards.map((card, index) => (
                <div key={index} className="rounded-3xl border border-white/5 bg-[rgba(20,20,20,0.5)] p-8 backdrop-blur-lg hover:border-primary/30 transition-all duration-300">
                  <div className="inline-block rounded-full bg-primary/10 p-3">
                    <card.icon className="size-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{card.description}</p>
                  {card.details && (
                    <div className="mt-6 space-y-3">
                      {card.details.map((detail, idx) => (
                        <div key={idx} className="border-t border-white/5 pt-3">
                          <p className="text-sm font-medium text-primary">{detail.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            We serve all industries.{' '}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Contact us
            </a>{' '}
            to discover how we can help your business.
          </p>
        </div>
      </div>
    </section>
  );
}