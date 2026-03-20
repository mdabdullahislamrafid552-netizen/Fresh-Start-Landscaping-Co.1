import { Phone } from 'lucide-react';

export default function StickyCallButton() {
  return (
    <a
      href="tel:215-651-1329"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#081C15] text-white p-4 rounded-full shadow-2xl hover:bg-[#1B4332] hover:scale-105 transition-all duration-500 flex items-center justify-center group border border-white/10"
      aria-label="Call Us"
    >
      <Phone className="h-5 w-5" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-sm tracking-widest ml-0 group-hover:ml-3">
        (215) 651-1329
      </span>
    </a>
  );
}
