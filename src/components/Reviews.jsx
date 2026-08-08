'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquare, X } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    name: 'Ahmed Khan',
    rating: 5,
    text: 'Highly professional and knowledgeable team. They handled my corporate registration efficiently. Highly recommended!',
    date: '2025-01-15'
  },
  {
    id: 2,
    name: 'Sara Ali',
    rating: 5,
    text: 'Best legal services in town. Their intellectual property team is top-notch.',
    date: '2025-02-10'
  },
  {
    id: 3,
    name: 'Usman Tariq',
    rating: 5,
    text: 'Very satisfied with the consultation. They provided clear and practical legal advice for our startup.',
    date: '2024-11-20'
  },
  {
    id: 4,
    name: 'Fatima R.',
    rating: 5,
    text: 'The lawyers here are very responsive and truly care about their clients. Exceptional service from start to finish.',
    date: '2025-03-05'
  },
  {
    id: 5,
    name: 'Zain Abbas',
    rating: 4,
    text: 'Great experience overall. Helped us resolve a property dispute smoothly. Would definitely use their services again.',
    date: '2024-12-01'
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' or 'oldest'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });

  const sortedReviews = [...reviews].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sortedReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sortedReviews.length) % sortedReviews.length);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    const reviewToAdd = {
      id: Date.now(),
      name: newReview.name,
      rating: Number(newReview.rating),
      text: newReview.text,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([reviewToAdd, ...reviews]);
    setIsModalOpen(false);
    setNewReview({ name: '', rating: 5, text: '' });
    setCurrentIndex(0); // Go to the newly added review
  };

  const currentReview = sortedReviews[currentIndex];

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <label className="text-xs font-semibold text-brand-navy uppercase tracking-wider">
            Sort by:
          </label>
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              setCurrentIndex(0);
            }}
            className="bg-brand-cream/20 border border-brand-light-gray rounded-sm px-3 py-1.5 text-xs text-brand-navy focus:outline-none focus:border-brand-burgundy transition-colors cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Leave a Review
        </button>
      </div>

      {/* Review Slideshow */}
      <div className="relative bg-brand-cream/30 border border-brand-light-gray p-8 rounded-md shadow-xs min-h-[250px] flex flex-col justify-center items-center text-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto w-full"
          >
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < currentReview.rating ? 'fill-amber-500' : 'fill-transparent text-amber-500/30'}`}
                />
              ))}
            </div>
            
            <p className="text-base md:text-lg font-serif italic text-brand-navy/85 mb-8 leading-relaxed px-4">
              "{currentReview.text}"
            </p>
            
            <div className="flex flex-col items-center justify-center border-t border-brand-light-gray/60 pt-6">
              <span className="font-semibold text-brand-navy text-sm">{currentReview.name}</span>
              <span className="text-[11px] text-brand-muted-gray mt-1">{currentReview.date}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-paper border border-brand-light-gray rounded-full flex items-center justify-center text-brand-navy hover:text-brand-burgundy hover:border-brand-burgundy transition-colors shadow-sm z-10"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-paper border border-brand-light-gray rounded-full flex items-center justify-center text-brand-navy hover:text-brand-burgundy hover:border-brand-burgundy transition-colors shadow-sm z-10"
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {sortedReviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'w-6 bg-brand-burgundy' : 'w-2 bg-brand-light-gray hover:bg-brand-muted-gray'
            }`}
            aria-label={`Go to review ${idx + 1}`}
          />
        ))}
      </div>

      {/* Add Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-brand-paper border border-brand-light-gray rounded-md p-6 md:p-8 w-full max-w-md shadow-2xl z-10"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-brand-muted-gray hover:text-brand-burgundy transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="font-serif text-2xl text-brand-navy mb-6">Write a Review</h3>
              
              <form onSubmit={handleAddReview} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-brand-cream/20 border border-brand-light-gray rounded-sm px-4 py-2.5 text-sm text-brand-navy focus:outline-none focus:border-brand-burgundy transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wider mb-2">
                    Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${star <= newReview.rating ? 'fill-amber-500 text-amber-500' : 'fill-transparent text-brand-light-gray'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wider mb-2">
                    Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full bg-brand-cream/20 border border-brand-light-gray rounded-sm px-4 py-2.5 text-sm text-brand-navy focus:outline-none focus:border-brand-burgundy transition-colors resize-none"
                    placeholder="Share your experience..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full mt-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper px-4 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
