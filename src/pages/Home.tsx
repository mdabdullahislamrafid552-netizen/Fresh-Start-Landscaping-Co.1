import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Sprout, Shovel, Scissors, TreePine, CheckCircle2, Wrench, Droplets } from 'lucide-react';

const services = [
  {
    title: 'Lawn & Seasonal Care',
    description: 'Year-round mowing, edging, and seasonal cleanup to keep your lawn pristine.',
    icon: Leaf,
    image: 'https://greenthumblawnservices.com/wp-content/uploads/2024/11/istockphoto-154099460-612x612-1.jpg',
  },
  {
    title: 'Landscape Design',
    description: 'Custom designs that bring your dream outdoor space to life.',
    icon: Sprout,
    image: 'https://charlestownlandscaping.com/wp-content/uploads/2023/11/Landscape-Design-Project.jpg',
  },
  {
    title: 'Bed Renovation',
    description: 'Fresh mulch and redesigned beds for a polished, healthy landscape.',
    icon: Shovel,
    image: 'https://t4.ftcdn.net/jpg/11/19/45/21/360_F_1119452102_u4C5DuHfoIKleb1c3BoO6dVSif6OvSjT.jpg',
  },
  {
    title: 'Shrub Trimming',
    description: 'Precise trimming to maintain shape and promote healthy growth.',
    icon: Scissors,
    image: 'https://greenpal-production.s3.amazonaws.com/7ica9gvpy1l15k7sf9srwsap9mle',
  },
  {
    title: 'Tree Pruning',
    description: 'Safe, expert pruning to improve tree health and curb appeal.',
    icon: TreePine,
    image: 'https://treeworks.info/wp-content/uploads/2025/05/Tree_Pruning_and_Tree_Trimming.jpg',
  },
  {
    title: 'Sod Installation',
    description: 'Lush new sod or targeted repairs for a thick, green lawn.',
    icon: CheckCircle2,
    image: 'https://www.greenbaynorthern.com/wp-content/uploads/2025/03/Sod-Installation-Lawn-Repair.webp',
  },
  {
    title: 'Irrigation Systems',
    description: 'Efficient watering systems installed, repaired, and optimized.',
    icon: Wrench,
    image: 'https://metrolawncare.com/wp-content/uploads/2020/01/commercialirrigation.jpeg',
  },
  {
    title: 'Weed Control',
    description: 'Targeted programs to eliminate weeds and nourish your turf.',
    icon: Droplets,
    image: 'https://premierlawnandtree.com/wp-content/uploads/2018/03/Premier-Artboard-34@2x-50-e1521587206892.jpg',
  },
];

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://lirp.cdn-website.com/bcbe79f4/dms3rep/multi/opt/outdoor+landscaping+mn-640w.jpeg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white/80 mb-8"
          >
            Premium Landscape Architecture
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif text-white mb-8 leading-[0.85] tracking-tighter"
          >
            Fresh <span className="italic text-[var(--color-primary)] font-light">Start</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <Link
              to="/free-quote"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase text-white overflow-hidden border border-white/30 hover:border-white transition-colors duration-500"
            >
              <span className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
              <span className="relative flex items-center gap-4 group-hover:text-gray-900 transition-colors duration-500">
                Discover Our Work <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-10"
          >
            We transform ordinary spaces into <span className="italic text-gray-500">extraordinary</span> living environments.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-px h-24 bg-black/20 mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Services Editorial Grid */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-4">Expertise</p>
              <h3 className="text-4xl md:text-7xl font-serif text-gray-900 tracking-tight">
                Our Services
              </h3>
            </div>
            <Link to="/services" className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-900 border-b border-gray-900 pb-1 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative mb-8 bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="text-sm font-serif text-gray-400 pt-2">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-3xl font-serif text-gray-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-500">{service.title}</h4>
                    <p className="text-gray-500 font-light leading-relaxed max-w-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistry Section (Parallax) */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://cdn.hibuwebsites.com/149ce9983db24aad972c592cec15c9cd/dms3rep/multi/RSshutterstock_386429833.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl font-serif text-white mb-12 leading-[1.1] tracking-tight"
          >
            Artistry in every <br/>
            <span className="italic font-light text-white/90">blade of grass.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/free-quote"
              className="inline-block border border-white text-white px-12 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-gray-900 transition-colors duration-500"
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Minimal CTA Section */}
      <section className="py-32 bg-[#081C15] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--color-primary)] mb-6">Next Steps</p>
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-12 tracking-tight">Ready for a <span className="italic text-white/70">Fresh Start?</span></h2>
          <Link
            to="/free-quote"
            className="inline-flex items-center gap-4 bg-white text-[#081C15] px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors duration-500"
          >
            Get Your Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}