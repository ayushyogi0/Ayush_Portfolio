import { useState, useEffect } from 'react';
import { Star, Quote, Send } from "lucide-react";
import { motion } from "motion/react";

interface Review {
  name: string;
  email: string;
  text: string;
  rating: number;
  timestamp: number;
}

export function Testimonials() {
  const [formData, setFormData] = useState({ name: '', email: '', text: '', rating: 5 });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [clientReviews, setClientReviews] = useState<Review[]>([]);
  const [submitStatus, setSubmitStatus] = useState('');

  const staticTestimonials = [
    {
      name: "Pintu Kumawat",
      role: "Software Engineer, Flutter & Python",
      image: "/pintu-kumawat.jpeg",
      text: "Professional, creative, and detail-oriented. Ayush delivered exactly what we needed and even improved our initial concept. Great communication and strong design skills.",
      rating: 5,
    },
    {
      name: "Vinit Khatri",
      role: "Application Developer, TechSolutions",
      image: "/vinit-khatri.jpeg",
      text: "Working with Ayush was a game-changer. His UI designs are not only beautiful but also backed by solid data analysis.",
      rating: 4,
    },
    {
      name: "Lokesh Kumawat",
      role: "MERN Stack Developer, API Binder",
      image: "/lokesh-kumawat.jpeg",
      text: "The analytics dashboard Ayush created helped us visualize our data in ways we never imagined. Highly recommended!",
      rating: 5,
    },
  ];

  // Load reviews from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('clientReviews');
    if (saved) {
      setClientReviews(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name || !formData.email || !formData.text) {
      setSubmitStatus('Please fill all fields');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('❌ Please enter a valid email address (e.g., name@example.com)');
      return;
    }

    if (formData.text.trim().length < 10) {
      setSubmitStatus('❌ Review must be at least 10 characters long');
      return;
    }

    const newReview: Review = {
      ...formData,
      timestamp: Date.now()
    };

    const updated = [newReview, ...clientReviews];
    setClientReviews(updated);
    localStorage.setItem('clientReviews', JSON.stringify(updated));
    
    setFormData({ name: '', email: '', text: '', rating: 5 });
    setSubmitStatus('✓ Thank you! Your review has been submitted successfully');
    setTimeout(() => setSubmitStatus(''), 4000);
  };

  const allTestimonials = [...clientReviews.map(review => ({
    name: review.name,
    role: review.email,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${review.email}`,
    text: review.text,
    rating: review.rating,
  })), ...staticTestimonials];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Review Submission Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-16 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Share Your Feedback</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-3">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    title={`Rate ${star} stars`}
                    onClick={() => setFormData({...formData, rating: star})}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={28}
                      className={`${
                        (hoveredRating || formData.rating) >= star
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-500'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Your Review</label>
              <textarea
                placeholder="Share your experience working with me... (min 10 characters)"
                value={formData.text}
                onChange={(e) => setFormData({...formData, text: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none h-32"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <Send size={20} />
              Submit Review
            </button>

            {/* Status Message */}
            {submitStatus && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center font-medium ${submitStatus.includes('Thank') ? 'text-green-400' : 'text-red-400'}`}
              >
                {submitStatus}
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* All Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 space-y-6"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
