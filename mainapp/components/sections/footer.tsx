import Image from "next/image";
import Link from "next/link";

const pageLinks = [
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
  { name: "Pricing", href: "#pricing" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
  { name: "FAQ", href: "#faq" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Youtube", href: "#" },
  { name: "X/Twitter", href: "#" },
  { name: "Instagram", href: "#" },
];

const legalLinks = [
  { name: "Terms & conditions", href: "#" },
  { name: "Privacy policy", href: "#" },
];

type LinkColumnProps = {
  title: string;
  links: { name:string; href: string }[];
  className?: string;
};

const LinkColumn = ({ title, links, className }: LinkColumnProps) => (
  <div className={`flex flex-col gap-6 ${className}`}>
    <h3 className="text-xl font-medium text-white">{title}</h3>
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.href} className="text-base text-muted-foreground hover:text-white transition-colors">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#080808] relative pt-[120px]">
     
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 pb-[80px]">
          <div className="flex flex-col gap-6 lg:pr-10">
            <h3 className="text-xl font-medium text-white">About Us</h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-primary font-medium text-base mb-1">Email</p>
                <a href="mailto:contact@matriqz.com" className="group/link text-white text-base flex items-center gap-2">
                  contact@matriqz.com
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/q2Y5TM0gdzNrTRONDeZNaxphO4-30.png" alt="arrow icon" width={12} height={12} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
              <div>
                <p className="text-primary font-medium text-base mb-1">Phone</p>
                <a href="tel:+917483417996" className="group/link text-white text-base flex items-center gap-2">
                  +91 7483417996
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b0ad9747-3bfa-4575-b08c-7a979eb5c843-auralistemplate-framer-website/assets/icons/q2Y5TM0gdzNrTRONDeZNaxphO4-30.png" alt="arrow icon" width={12} height={12} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          <LinkColumn title="Links" links={pageLinks} className="lg:px-10 lg:border-l border-border" />
          <LinkColumn title="Social Media" links={socialLinks} className="lg:px-10 lg:border-l border-border" />
          <LinkColumn title="Legal" links={legalLinks} className="lg:pl-10 lg:border-l border-border" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-[40px] border-t border-border">
          <p className="text-base text-muted">© 2026, MATRIXWAYZ</p>
          <p className="text-base text-muted">Innovating with AI-Powered Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;