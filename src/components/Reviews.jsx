'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquare, X, Award, UserCheck } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    name: 'Mona Husain',
    badge: '5 reviews',
    rating: 5,
    text: 'Usually when you have to deal with lawyers, it just seems so difficult because they all just want to take money from you and not deliver. However, our experience with them has been amazing. They understand each case carefully and know the details thoroughly. Very satisfied with their service!',
    date: '2 months ago'
  },
  {
    id: 2,
    name: 'Atif Jan',
    badge: '3 reviews',
    rating: 5,
    text: 'You can use this Google review: ⭐⭐⭐⭐⭐ Highly recommended for legal consulting and company registration services.',
    date: '2 months ago'
  },
  {
    id: 3,
    name: 'Shahid Mustafa Mastoi',
    badge: 'Local Guide · 4 reviews · 8 photos',
    rating: 5,
    text: 'I highly recommend The Lawyers for their professional and reliable legal services. They have successfully handled my company registration, annual renewals, FBR matters, and other legal requirements with great efficiency. Their team is top notch.',
    date: '2 months ago'
  },
  {
    id: 4,
    name: 'Maroosh Khan',
    badge: '1 review',
    rating: 5,
    text: 'Highly professional and trustworthy. They Completed my company registration efficiently and guided me throughout the process . Highly recommend!',
    date: 'a month ago'
  },
  {
    id: 5,
    name: 'Muhammad Rameel',
    badge: '5 reviews',
    rating: 5,
    text: 'I have been employing their services for a few years now and have been extremely satisfied with the delivery. Their team is highly responsive, very hands on and great at the work they do. Definitely recommended!',
    date: '2 months ago'
  },
  {
    id: 6,
    name: 'Rao Waqas',
    badge: '1 review',
    rating: 5,
    text: 'I would like to express my sincere appreciation for the exceptional services provided by The Lawyers Legal Consulting Firm. Exceptional professionalism and support.',
    date: '2 months ago'
  },
  {
    id: 7,
    name: 'Hafiz Javed',
    badge: '1 review',
    rating: 5,
    text: 'Excellent experience with this firm. Good Professionals and most cooperative staff. I wish for their success.',
    date: '2 months ago'
  },
  {
    id: 8,
    name: 'Linda Lasliy',
    badge: '1 review',
    rating: 5,
    text: 'Best Law firm to register your new entity and best service ever and all done within 2-3 working days',
    date: '2 months ago'
  },
  {
    id: 9,
    name: 'APNA',
    badge: '2 reviews',
    rating: 5,
    text: 'The process was fast and clear. Updates were received after every step. Truely appreciates and recommend.',
    date: '2 months ago'
  },
  {
    id: 10,
    name: 'M. Ismail',
    badge: '1 review · 1 photo',
    rating: 5,
    text: 'Ali Ahmad was super helpful in registering my company AppySpark. His knowledge and support made the process hassle-free. Thanks for your time and effort, Advocate Ali Ahmad',
    date: '2 months ago'
  },
  {
    id: 11,
    name: 'Ashraf',
    badge: '1 review · 1 photo',
    rating: 5,
    text: 'I have got their service for company registration and I am satisfied allhamdulillah ❤️',
    date: '5 months ago'
  },
  {
    id: 12,
    name: 'Waqar Ahmed',
    badge: '6 reviews',
    rating: 5,
    text: 'Great experience with the lawyers for company registration.',
    date: 'a month ago'
  },
  {
    id: 13,
    name: 'afficial entertainment',
    badge: '4 reviews · 5 photos',
    rating: 5,
    text: 'Found on google chrome, registered my construction company and had a great experience with them!!',
    date: '4 months ago'
  },
  {
    id: 14,
    name: 'dureshahwar Faisal',
    badge: '5 reviews',
    rating: 5,
    text: 'Very Nice, All Documents Were Provided With Company Registration.',
    date: '2 months ago'
  },
  {
    id: 15,
    name: 'Hassan Masood',
    badge: '3 reviews · 1 photo',
    rating: 5,
    text: 'Best services and streamline process 100% recommended',
    date: '4 months ago'
  },
  {
    id: 16,
    name: 'Ovais Khan',
    badge: '1 review',
    rating: 5,
    text: 'Best services by The Lawyers',
    date: '2 months ago'
  },
  {
    id: 17,
    name: 'uzaib hilal',
    badge: '4 reviews',
    rating: 5,
    text: 'Love to work with The Lawyers',
    date: 'a month ago'
  },
  {
    id: 18,
    name: 'Huzaifa Mehmood',
    badge: '3 reviews',
    rating: 5,
    text: 'It was a great and effortless experience i had',
    date: '5 months ago'
  },
  {
    id: 19,
    name: 'Ali Raza',
    badge: '2 reviews',
    rating: 5,
    text: 'Good and Quick Service',
    date: '2 months ago'
  },
  {
    id: 20,
    name: 'Wajeeha Imtiaz',
    badge: '11 reviews · 7 photos',
    rating: 5,
    text: 'I had a really positive experience with the team, everything was explained throughly and the registration process went smoothly in no time. I would recommend The lawyers to anyone wanting legal services.',
    date: '2 months ago'
  },
  {
    id: 21,
    name: 'Rana Arslan Ali Khan',
    badge: 'Local Guide · 22 reviews',
    rating: 5,
    text: 'Very Good Experience They are very professional and also guide me accordingly',
    date: '2 months ago'
  },
  {
    id: 22,
    name: 'Babloo Sahto',
    badge: 'Verified Client',
    rating: 5,
    text: 'Highly professional service and smooth corporate registration process!',
    date: '4 weeks ago'
  },
  {
    id: 23,
    name: 'Dilawr Hussain',
    badge: '2 photos',
    rating: 5,
    text: 'Extremely satisfied with their fast and reliable legal assistance.',
    date: 'a month ago'
  },
  {
    id: 24,
    name: 'MS K',
    badge: 'Verified Client',
    rating: 5,
    text: 'Excellent legal advisory firm. Quick response and smooth process.',
    date: 'a month ago'
  },
  {
    id: 25,
    name: 'Shahjahan Memon',
    badge: '1 review',
    rating: 5,
    text: 'Great experience working with The Lawyers. Highly efficient!',
    date: '2 months ago'
  },
  {
    id: 26,
    name: 'Sukoon tea',
    badge: 'Local Guide · 2 reviews · 9 photos',
    rating: 5,
    text: 'Outstanding support and clear guidance for entity setup.',
    date: '2 months ago'
  },
  {
    id: 27,
    name: 'Ume Salma Biologist',
    badge: '1 review',
    rating: 5,
    text: 'Very smooth and professional experience. Highly recommended!',
    date: '2 months ago'
  },
  {
    id: 28,
    name: 'Nawab Ahmad',
    badge: 'Verified Client',
    rating: 5,
    text: 'Prompt response and great service for business legalities.',
    date: '2 months ago'
  },
  {
    id: 29,
    name: 'Hashir Gul',
    badge: '1 review · 4 photos',
    rating: 5,
    text: 'Top class legal consulting firm in Pakistan. Very satisfied!',
    date: '2 months ago'
  },
  {
    id: 30,
    name: 'Ahmed Raza',
    badge: 'Verified Client',
    rating: 5,
    text: 'Efficient service, very helpful team. Recommended!',
    date: '2 months ago'
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    const reviewToAdd = {
      id: Date.now(),
      name: newReview.name,
      badge: 'Verified Client',
      rating: Number(newReview.rating),
      text: newReview.text,
      date: 'Just now'
    };

    setReviews([reviewToAdd, ...reviews]);
    setIsModalOpen(false);
    setNewReview({ name: '', rating: 5, text: '' });
    setCurrentIndex(0);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-xs font-bold border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            5.0 Google Reviews ({reviews.length}+ Verified Ratings)
          </span>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-brand-burgundy hover:bg-red-800 text-brand-paper px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Leave a Review
        </button>
      </div>

      {/* Review Slideshow */}
      <div className="relative bg-brand-cream/30 border border-brand-light-gray p-6 sm:p-10 rounded-lg shadow-xs min-h-[260px] flex flex-col justify-center items-center text-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto w-full px-4 sm:px-8"
          >
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < currentReview.rating ? 'fill-amber-500' : 'fill-transparent text-amber-500/30'}`}
                />
              ))}
            </div>
            
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-brand-navy/90 mb-6 leading-relaxed">
              "{currentReview.text}"
            </p>
            
            <div className="flex flex-col items-center justify-center border-t border-brand-light-gray/60 pt-4">
              <span className="font-semibold text-brand-navy text-sm md:text-base flex items-center gap-1.5">
                {currentReview.name}
              </span>
              <div className="flex items-center gap-2 mt-1">
                {currentReview.badge && (
                  <span className="text-[11px] font-medium text-brand-burgundy bg-brand-burgundy/10 px-2 py-0.5 rounded-xs">
                    {currentReview.badge}
                  </span>
                )}
                <span className="text-[11px] text-brand-muted-gray">• {currentReview.date}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-paper border border-brand-light-gray rounded-full flex items-center justify-center text-brand-navy hover:text-brand-burgundy hover:border-brand-burgundy transition-colors shadow-md z-10 cursor-pointer"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-paper border border-brand-light-gray rounded-full flex items-center justify-center text-brand-navy hover:text-brand-burgundy hover:border-brand-burgundy transition-colors shadow-md z-10 cursor-pointer"
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Counter & Indicator */}
      <div className="flex flex-col items-center gap-2 mt-6">
        <span className="text-xs text-brand-muted-gray font-medium">
          Review {currentIndex + 1} of {reviews.length}
        </span>
        <div className="flex justify-center gap-1.5 flex-wrap max-w-md">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-brand-burgundy' : 'w-2 bg-brand-light-gray hover:bg-brand-muted-gray'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
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
                className="absolute top-4 right-4 text-brand-muted-gray hover:text-brand-burgundy transition-colors cursor-pointer"
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
                        className="focus:outline-none cursor-pointer"
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
                  className="w-full mt-2 bg-brand-burgundy hover:bg-red-800 text-brand-paper px-4 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
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

