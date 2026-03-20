import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Huge Typography & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-6">Inquiries</p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gray-900 tracking-tighter leading-[0.9] mb-16">
              Let's <span className="italic text-gray-400">Talk.</span>
            </h1>

            <div className="space-y-12">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-2">Email</p>
                <a href="mailto:hello@freshstart.com" className="text-xl md:text-2xl font-serif text-gray-900 hover:text-[var(--color-primary)] transition-colors break-all">
                  hello@freshstart.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-2">Phone</p>
                <a href="tel:215-651-1329" className="text-xl md:text-2xl font-serif text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                  (215) 651-1329
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-2">Location</p>
                <p className="text-xl md:text-2xl font-serif text-gray-900">
                  Philadelphia & Surrounding Suburbs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-4xl font-serif text-gray-900 mb-6">Thank You.</h3>
                <p className="text-lg text-gray-500 font-light mb-10">
                  We have received your inquiry and will be in touch shortly to discuss your project.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="self-start border-b border-gray-900 pb-1 text-sm font-semibold tracking-[0.2em] uppercase text-gray-900 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="peer w-full bg-transparent border-b border-black/20 py-3 text-gray-900 placeholder-transparent focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="First Name"
                    />
                    <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gray-900">First Name</label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      className="peer w-full bg-transparent border-b border-black/20 py-3 text-gray-900 placeholder-transparent focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Last Name"
                    />
                    <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gray-900">Last Name</label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    className="peer w-full bg-transparent border-b border-black/20 py-3 text-gray-900 placeholder-transparent focus:border-gray-900 focus:outline-none transition-colors"
                    placeholder="Email Address"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gray-900">Email Address</label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="peer w-full bg-transparent border-b border-black/20 py-3 text-gray-900 placeholder-transparent focus:border-gray-900 focus:outline-none transition-colors resize-none"
                    placeholder="Project Details"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gray-900">Project Details</label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#081C15] text-white px-8 py-5 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}