import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold tracking-tight uppercase mb-1">
              In<span className="font-light"> Memoriam</span>
            </p>
            <p className="text-white/40 text-sm font-light mt-3 leading-relaxed">
              This memorial page was lovingly created to celebrate the life of
              Rebecca A. Demuth and to provide a place for family and friends to share their memories.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider mb-4">Quick Links</p>
            <div className="space-y-2">
              <a href="#obituary" className="block text-sm text-white/50 font-light hover:text-white transition-colors">Obituary</a>
              <a href="#events" className="block text-sm text-white/50 font-light hover:text-white transition-colors">Services & Events</a>
              <a href="#tributes" className="block text-sm text-white/50 font-light hover:text-white transition-colors">Send a Tribute</a>
              <a href="#memorial-wall" className="block text-sm text-white/50 font-light hover:text-white transition-colors">Memorial Wall</a>
            </div>
          </div>

          {/* Funeral home */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider mb-4">Funeral Home</p>
            <div className="space-y-3 text-sm text-white/50 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/30" />
                John A. Gentleman Mortuary<br />1010 N 72nd Street, Omaha, NE 68114
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/30" />
                (402) 391-1664
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/30" />
                info@johnagentleman.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-xs text-white/25 font-light">
          &copy; {new Date().getFullYear()} Memorial Tributes. Created with love by the family.
        </div>
      </div>
    </footer>
  )
}
