'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export default function RelatedServices({ currentSlug, count = 3 }) {
  const startIndex = services.findIndex((s) => s.slug === currentSlug);
  const others = services.filter((s) => s.slug !== currentSlug);

  const related = startIndex === -1
    ? others.slice(0, count)
    : Array.from({ length: count }, (_, i) => services[(startIndex + 1 + i) % services.length])
        .filter((s) => s.slug !== currentSlug);

  if (related.length === 0) return null;

  return (
    <section className="py-10 md:py-16 px-4 md:px-12 bg-brand-cream/40 border-t border-brand-light-gray/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-burgundy uppercase tracking-widest">
            Explore More
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-normal text-brand-navy mt-2">
            Related Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {related.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-paper border border-brand-light-gray rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="relative w-full aspect-[4/3] bg-brand-navy overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-base md:text-lg font-semibold text-brand-navy mb-2 line-clamp-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-brand-navy/70 leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center gap-2 text-brand-burgundy font-semibold text-xs uppercase tracking-wider hover:text-brand-navy transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
