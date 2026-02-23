"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '#process', label: 'Process' },
  { href: '#industries', label: 'Industries' },
  { href: '#pricing', label: 'Pricing' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-5 lg:p-10 font-['Inter']">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative">
          {/* Desktop & Mobile Top Bar */}
          <div className="flex items-center justify-between bg-[rgba(20,20,20,0.35)] backdrop-blur-md rounded-[10px] py-[15px] px-5">
            <Link href="/" className="flex items-center gap-2.5 z-10">
  <Image
    src="/matrixbg.png"
    alt="Matrixwayz Logo"
    width={26}
    height={26}
    className="object-contain"
  />
  <span className="text-white text-base font-normal">MATRIXWAYZ</span>
</Link>


            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                  className="relative flex items-center gap-1 text-white text-sm transition-colors hover:text-gray-300"
                >
                  Solutions
                  <ChevronDown className="w-4 h-4" />
                  <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
                {isSolutionsOpen && (
                  <div
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    className="absolute top-full left-0 mt-2 bg-[rgba(20,20,20,0.95)] backdrop-blur-lg rounded-lg border border-border min-w-[160px] py-2"
                  >
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm text-white hover:bg-primary/10 transition-colors"
                    >
                      Services
                    </Link>
                    <Link
                      href="/products"
                      className="block px-4 py-2 text-sm text-white hover:bg-primary/10 transition-colors"
                    >
                      Products
                    </Link>
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="relative group text-white text-sm transition-colors hover:text-gray-300">
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden lg:block bg-secondary text-white text-base font-medium py-3 px-6 rounded-[12px] border border-transparent hover:border-primary transition-colors duration-300"
            >
              Contact Us
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white z-10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[rgba(20,20,20,0.95)] backdrop-blur-lg rounded-[10px] p-5">
              <nav className="flex flex-col items-center gap-4">
                <div className="w-full">
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="text-white text-base py-2 w-full text-center flex items-center justify-center gap-1"
                  >
                    Solutions
                    <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSolutionsOpen && (
                    <div className="flex flex-col gap-2 mt-2 pl-4">
                      <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white/80 text-sm py-1 w-full text-center"
                      >
                        Services
                      </Link>
                      <Link
                        href="/products"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white/80 text-sm py-1 w-full text-center"
                      >
                        Products
                      </Link>
                    </div>
                  )}
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-base py-2 w-full text-center"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center bg-secondary text-white text-base font-medium mt-4 py-3 px-6 rounded-[12px] border border-transparent hover:border-primary transition-colors duration-300"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;