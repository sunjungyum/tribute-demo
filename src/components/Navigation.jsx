import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'obituary', label: 'Obituary' },
  { id: 'events', label: 'Services' },
  { id: 'tributes', label: 'Tributes' },
  { id: 'memorial-wall', label: 'Memorial Wall' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-stone-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="font-serif text-xl text-stone-900 tracking-tight">
            In Memoriam
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[13px] font-light text-stone-500 hover:text-stone-900 transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-stone-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-light text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
