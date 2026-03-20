import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#081C15] text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-8">
              <img src="https://i.imgur.com/NMgV0ZT.png" alt="Fresh Start Landscaping Co." className="h-12 w-auto brightness-0 invert opacity-90" referrerPolicy="no-referrer" />
            </Link>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
              Premium landscape architecture and maintenance, transforming ordinary spaces into extraordinary environments.
            </p>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-500 mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors font-light">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors font-light">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors font-light">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors font-light">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-300 font-light">
              <li>Philadelphia, PA</li>
              <li><a href="tel:215-651-1329" className="hover:text-white transition-colors">(215) 651-1329</a></li>
              <li><a href="mailto:hello@freshstart.com" className="hover:text-white transition-colors">hello@freshstart.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Fresh Start Landscaping Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-light text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}