import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Editorial Header */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-6">Our Story</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gray-900 tracking-tighter leading-[0.9] mb-8">
            Rooted in <span className="italic text-gray-400">Passion.</span>
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src="https://www.greenlawnfertilizing.com/hubfs/Imported_Blog_Media/garden-landscape-540x540_jpg-Dec-06-2023-05-30-36-4772-PM.webp"
                  alt="Landscaper working"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 lg:pl-12 pt-4 lg:pt-12"
            >
              <h2 className="text-7xl md:text-[10rem] font-serif text-[var(--color-primary)] leading-none tracking-tighter mb-8">
                20<span className="text-4xl text-gray-300 align-top">+</span>
              </h2>
              <h3 className="text-3xl font-serif text-gray-900 mb-10">Years of Experience</h3>
              
              <div className="space-y-8 text-xl text-gray-500 font-light leading-relaxed">
                <p>
                  My journey started as a kid helping my grandfather tend to his yard. What began as weekend chores quickly became a craft I fell in love with. Over the past two decades, I've honed my skills and developed an eye for detail that turns every lawn into a work of art.
                </p>
                <p>
                  This isn't just a job for me — it's a peace of mind. There's nothing quite like stepping back and seeing a freshly sculpted landscape knowing you created that. I get paid to make art out of grass, and honestly, it doesn't even feel like work.
                </p>
                <p className="text-2xl font-serif text-gray-900 italic pt-6 border-t border-black/10">
                  "That love is what drives Fresh Start Landscaping Co. every single day."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-32 bg-white border-t border-black/5 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-10 tracking-tight">Let's Create Something <span className="italic text-gray-400">Beautiful</span></h2>
          <Link
            to="/free-quote"
            className="inline-block border border-gray-900 text-gray-900 px-12 py-5 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-gray-900 hover:text-white transition-colors duration-500"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}