'use client';

import Link from 'next/link';

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-background py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center justify-center rounded-lg border border-primary bg-accent px-4 py-2">
            <p className="text-sm font-medium text-primary">Pricing</p>
          </div>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">Custom Pricing</h2>
          <p className="mt-6 max-w-[700px] text-center text-base text-muted-foreground">
            At MATRIXWAYZ, we understand that every project is unique. That's why we offer cost-effective custom pricing tailored to your specific requirements. Our pricing varies based on project scope, complexity, and deliverables to ensure you get the best value for your investment.
          </p>

          <div className="mt-16 w-full max-w-2xl">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/30 bg-[#141414] p-12">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(255,140,58,0.2),transparent)]" />
              <div className="z-10 flex flex-grow flex-col items-center text-center">
                <h3 className="text-3xl font-semibold text-white">Flexible Solutions</h3>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  Whether you need our AI-powered products or custom service-based solutions, we provide transparent pricing that fits your budget. Let's discuss your project requirements and create a pricing plan that works for you.
                </p>
                <div className="mt-8 space-y-4 text-base text-muted-foreground">
                  <p>✓ Cost-effective custom pricing</p>
                  <p>✓ Transparent project estimates</p>
                  <p>✓ Flexible payment options</p>
                  <p>✓ No hidden fees</p>
                  <p>✓ Scalable solutions</p>
                </div>
                <Link
                  href="#contact"
                  className="mt-10 block w-full max-w-md rounded-lg bg-primary py-4 text-center text-base font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Contact Us for Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;