'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'About', href: '#about' },
    { name: 'How We Work', href: '#how-we-work' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-paper/90 backdrop-blur-md border-b border-brand-light-gray/60 py-3 shadow-sm'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Logo variant="light" size="normal" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[14px] font-medium text-brand-navy/85 hover:text-brand-navy transition-colors tracking-wide py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-burgundy scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Direct Contact & CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end text-right">
              <a 
                href="tel:+923366050615" 
                className="flex items-center gap-1.5 text-xs font-semibold text-brand-navy hover:text-brand-burgundy transition-colors"
              >
                <Phone className="w-3 h-3 text-brand-burgundy" />
                +92 336 6050615
              </a>
              <span className="text-[10px] text-brand-muted-gray">Mon - Sat · 9am - 6pm</span>
            </div>
            
            <a
              href="#contact"
              className="bg-brand-navy hover:bg-brand-burgundy text-brand-paper px-5 py-2.5 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-md"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-navy hover:text-brand-burgundy transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-paper/98 flex flex-col pt-24 px-8 lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl text-brand-navy hover:text-brand-burgundy transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-brand-light-gray flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <a 
                  href="tel:+923366050615" 
                  className="flex items-center gap-2 text-base font-semibold text-brand-navy"
                >
                  <Phone className="w-4 h-4 text-brand-burgundy" />
                  +92 336 6050615
                </a>
                <a 
                  href="tel:+923073685421" 
                  className="flex items-center gap-2 text-base font-semibold text-brand-navy"
                >
                  <Phone className="w-4 h-4 text-brand-burgundy" />
                  +92 307 3685421
                </a>
                <span className="text-xs text-brand-muted-gray">info.thelawyers@gmail.com</span>
              </div>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-brand-burgundy hover:bg-brand-navy text-brand-paper py-3 rounded-sm text-sm font-semibold tracking-widest uppercase transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
