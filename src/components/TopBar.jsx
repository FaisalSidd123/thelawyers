'use client';

import { MapPin, Phone, Mail, MessageSquare, Sparkles } from 'lucide-react';

export default function TopBar({ onOpenInquiry }) {
  return (
    <div className="bg-brand-navy text-brand-paper/90 text-xs py-2 px-4 md:px-12 border-b border-brand-paper/10 hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Top Left Details */}
        <div className="flex items-center gap-4 flex-wrap text-[11px] md:text-xs">
          <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <MapPin className="w-3.5 h-3.5 text-brand-paper/80" />
            <span>Islamabad & Lahore, Pakistan</span>
          </span>
          <span className="hidden md:inline text-brand-paper/30">|</span>
          <a 
            href="tel:+923366050615" 
            className="flex items-center gap-1.5 hover:text-brand-paper transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-brand-paper/80" />
            <span>+92 336 6050615</span>
          </a>
          <span className="hidden md:inline text-brand-paper/30">|</span>
          <a 
            href="mailto:info@thelawyers.pk" 
            className="flex items-center gap-1.5 hover:text-brand-paper transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-paper/80" />
            <span>info@thelawyers.pk</span>
          </a>
        </div>

        {/* Top Right Options */}
        <div className="flex items-center gap-4 text-[11px] md:text-xs">
          <a
            href="https://wa.me/923366050615?text=Hello%2C%20I%20would%20like%20a%20legal%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-emerald-400/20" />
            <span>WhatsApp Consultation</span>
          </a>
          <span className="text-brand-paper/30">|</span>
          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-medium transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Free Quick Inquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
}
