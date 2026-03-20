import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Leaf, Sprout, Shovel, Scissors, TreePine, CheckCircle2, Wrench, Droplets } from 'lucide-react';

const services = [
  {
    title: 'Lawn & Seasonal Care',
    description: 'Year-round mowing, edging, and seasonal cleanup to keep your lawn pristine. We treat every blade of grass with the utmost respect, ensuring a vibrant, healthy foundation for your property.',
    features: ['Weekly & Bi-weekly Mowing', 'Spring & Fall Cleanups', 'Core Aeration', 'Overseeding'],
    icon: Leaf,
    image: 'https://greenthumblawnservices.com/wp-content/uploads/2024/11/istockphoto-154099460-612x612-1.jpg',
  },
  {
    title: 'Landscape Design',
    description: 'Custom designs that bring your dream outdoor space to life. Our architectural approach blends natural beauty with functional living spaces, creating an extension of your home.',
    features: ['3D Landscape Rendering', 'Hardscape Integration', 'Native Plant Selection', 'Lighting Design'],
    icon: Sprout,
    image: 'https://charlestownlandscaping.com/wp-content/uploads/2023/11/Landscape-Design-Project.jpg',
  },
  {
    title: 'Bed Renovation',
    description: 'Fresh mulch and redesigned beds for a polished, healthy landscape. We meticulously edge, weed, and mulch to provide striking contrast and essential moisture retention.',
    features: ['Premium Mulch Installation', 'Deep Edge Trenching', 'Weed Barrier Fabric', 'Soil Amendment'],
    icon: Shovel,
    image: 'https://t4.ftcdn.net/jpg/11/19/45/21/360_F_1119452102_u4C5DuHfoIKleb1c3BoO6dVSif6OvSjT.jpg',
  },
  {
    title: 'Shrub Trimming',
    description: 'Precise trimming to maintain shape and promote healthy growth. Our horticultural experts understand exactly when and how to prune different species for optimal blooming.',
    features: ['Structural Pruning', 'Formative Shaping', 'Disease Removal', 'Debris Haul-away'],
    icon: Scissors,
    image: 'https://greenpal-production.s3.amazonaws.com/7ica9gvpy1l15k7sf9srwsap9mle',
  },
];

export default function Services() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Editorial Header */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-6">Expertise</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gray-900 tracking-tighter leading-[0.9] mb-8">
            Our <span className="italic text-gray-400">Services</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
            Comprehensive landscaping solutions tailored to elevate your outdoor living space. We blend artistry with agronomy.
          </p>
        </motion.div>
      </section>

      {/* Services List - Editorial Split */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="text-sm font-serif text-gray-400 border-b border-black/10 pb-4">
                    0{index + 1}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">{service.title}</h2>
                  <p className="text-lg text-gray-500 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 pt-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-gray-600 font-light">
                        <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-8">
                    <Link
                      to="/free-quote"
                      className="inline-block border-b border-gray-900 pb-1 text-sm font-semibold tracking-[0.2em] uppercase text-gray-900 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                    >
                      Request Service
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-32 bg-[#081C15] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 tracking-tight">Transform Your <span className="italic text-white/70">Property</span></h2>
          <Link
            to="/free-quote"
            className="inline-block bg-white text-[#081C15] px-12 py-5 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors duration-500"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}