"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What makes MATRIXWAYZ unique?",
    answer: "MATRIXWAYZ stands out as both a product-based and service-based AI company. We don't just provide custom solutions - we also develop and release our own AI-powered products. Our dual approach combines innovation with tailored implementations, ensuring you get cutting-edge technology whether you choose our products or custom services.",
    value: "item-1",
  },
  {
    question: "Is my company a good fit for MATRIXWAYZ?",
    answer: "If your organization is looking to leverage AI to enhance efficiency, reduce costs, or unlock new capabilities, you're a perfect fit. We work with businesses across all industries - from education and healthcare to logistics and manufacturing. Whether you need our ready-made products or custom AI solutions, we have the expertise to help.",
    value: "item-2",
  },
  {
    question: "How does your pricing work?",
    answer: "At MATRIXWAYZ, we believe in cost-effective custom pricing tailored to your specific needs. Our pricing varies based on project scope, complexity, and deliverables. We offer transparent estimates with no hidden fees and flexible payment options to ensure you get the best value for your investment.",
    value: "item-3",
  },
  {
    question: "How long does the development phase take?",
    answer: "The timeline varies depending on project complexity and requirements. For our ready-made products, you can get started immediately. For custom solutions, most clients see initial implementations delivering value within a few weeks. We prioritize agile methodologies and rapid iteration to ensure quick time-to-value.",
    value: "item-4",
  },
  {
    question: "Do you provide support after implementation?",
    answer: "Absolutely. We provide comprehensive ongoing support, maintenance, and continuous optimization for all our solutions. Whether you're using our products or custom services, we're committed to ensuring your AI solutions continue to deliver results and adapt to your evolving business needs.",
    value: "item-5",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-background py-[120px]">
      <div className="mx-auto flex max-w-[800px] flex-col items-start gap-[30px] px-6 sm:px-10">
        
        <div className="flex items-center justify-center rounded-full border border-primary bg-accent py-2 px-4">
          <p className="text-sm font-medium text-accent-foreground">FAQ</p>
        </div>

        <div className="flex max-w-[580px] flex-col gap-5">
          <h2 className="text-5xl font-bold tracking-[-0.02em] text-text-primary">
            FAQ
          </h2>
          <p className="text-base text-text-secondary">
            We've answered the questions we're asked most often about MATRIXWAYZ and our AI solutions.
            Can't find what you're looking for? Feel free to reach out through the contact form!
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-border first:border-t"
            >
              <AccordionTrigger className="py-[30px] text-left text-xl font-medium text-text-primary hover:text-primary">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="pb-[30px]">
                <p className="text-base text-text-secondary">
                  {item.answer}
                </p>
              </AccordionContent>

            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default FAQSection;