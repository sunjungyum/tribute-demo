import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <p className="text-sm font-bold tracking-[0.15em] uppercase text-black mb-3">
              In Memoriam
            </p>
            <p className="text-[13px] text-gray-400 font-light leading-relaxed">
              This memorial page was lovingly created to celebrate the life of
              Rebecca A. Demuth and to provide a place for family and friends to share their memories.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-4">Navigation</p>
            <div className="space-y-2.5">
              <a href="#obituary" className="block text-sm text-gray-500 hover:text-black transition-colors duration-200">Obituary</a>
              <a href="#events" className="block text-sm text-gray-500 hover:text-black transition-colors duration-200">Services & Events</a>
              <a href="#tributes" className="block text-sm text-gray-500 hover:text-black transition-colors duration-200">Send a Tribute</a>
              <a href="#memorial-wall" className="block text-sm text-gray-500 hover:text-black transition-colors duration-200">Memorial Wall</a>
            </div>
          </div>

          {/* Funeral home */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-4">Funeral Home</p>
            <div className="space-y-2.5 text-sm text-gray-500 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-300" />
                <span>John A. Gentleman Mortuaries<br />1010 N 72nd Street<br />Omaha, NE 68114</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-300" />
                (402) 391-1664
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-300" />
                info@johnagentleman.com
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-4">Contact</p>
            <div className="space-y-2.5 text-sm text-gray-500 font-light">
              <p>For questions about services or this memorial page, please contact the funeral home directly.</p>
              <a
                href="tel:4023911664"
                className="inline-block text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors duration-200"
              >
                (402) 391-1664
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Memorial Tributes
          </p>
          <p className="text-xs text-gray-300">
            Created with love by the family
          </p>
        </div>
      </div>
    </footer>
  )
}
