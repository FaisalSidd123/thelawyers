'use client';

import Link from 'next/link';
import Logo from './Logo';
import { MapPin, Phone, Mail, ChevronRight, Shield, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-paper/80 pt-12 md:pt-16 pb-8 border-t border-brand-burgundy/40">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10 border-b border-brand-paper/10">
          
          {/* Column 1: Firm Overview */}
          <div className="flex flex-col items-start text-left gap-3">
            <Logo variant="dark" size="normal" />
            <p className="text-xs text-brand-paper/70 leading-relaxed mt-1 max-w-sm">
              Modern legal practice offering end-to-end corporate registration, tax compliance, and legal defense services across Pakistan. Protecting businesses, families, and assets with proven legal expertise.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://wa.me/923073685421"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-full text-xs font-medium transition-colors"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+923073685421"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-burgundy/30 text-amber-300 hover:bg-brand-burgundy hover:text-white rounded-full text-xs font-medium transition-colors"
                title="Direct Helpline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Column 2: Practice Areas / Quick Links */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-serif text-xs font-bold text-brand-paper uppercase tracking-widest mb-4 border-b border-brand-burgundy/50 pb-1.5">
              Practice Areas
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-brand-paper/75">
              <li>
                <Link href="/company-registration-compliance" className="flex items-center gap-2 hover:text-amber-300 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>SECP Company Registration</span>
                </Link>
              </li>
              <li>
                <Link href="/income-tax-filing" className="flex items-center gap-2 hover:text-amber-300 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>FBR Income Tax Return Filing</span>
                </Link>
              </li>
              <li>
                <Link href="/pseb-registration" className="flex items-center gap-2 hover:text-amber-300 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>PSEB Registration (IT Exemptions)</span>
                </Link>
              </li>
              <li>
                <Link href="/sales-tax-registration" className="flex items-center gap-2 hover:text-amber-300 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>Sales Tax (STRN) Registration</span>
                </Link>
              </li>
              <li>
                <Link href="/pasha-registration" className="flex items-center gap-2 hover:text-amber-300 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>P@SHA IT Membership</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-serif text-xs font-bold text-brand-paper uppercase tracking-widest mb-4 border-b border-brand-burgundy/50 pb-1.5">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3 text-xs text-brand-paper/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span>Corporate & Litigation Offices in Islamabad & Lahore, Pakistan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+923073685421" className="hover:text-amber-300 transition-colors">+92 307 3685421</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@thelawyers.pk" className="hover:text-amber-300 transition-colors">info@thelawyers.pk</a>
              </div>
            </div>
          </div>

          {/* Column 4: Legal Disclaimer */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-serif text-xs font-bold text-brand-paper uppercase tracking-widest mb-4 border-b border-brand-burgundy/50 pb-1.5 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Legal Disclaimer</span>
            </h4>
            <p className="text-[11px] text-brand-paper/65 leading-relaxed bg-brand-paper/5 p-3 rounded-md border border-brand-paper/10">
              The information provided on this website is for general informational purposes only and does not constitute formal legal advice until a formal attorney-client agreement is executed between the firm and the client.
            </p>
          </div>

        </div>

        {/* Copyright & Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-brand-paper/60 gap-4 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} The Lawyers. All Rights Reserved. Modern Legal Practice in Pakistan.
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-5">
            <Link href="/about" className="hover:text-amber-300 transition-colors">About Firm</Link>
            <Link href="/insights" className="hover:text-amber-300 transition-colors">Legal Insights</Link>
            <a href="https://wa.me/923073685421" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">Book Consultation</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
