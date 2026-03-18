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
        scrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="text-sm font-bold tracking-[0.15em] uppercase text-black">
          In Memoriam
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[13px] text-gray-500 hover:text-black transition-colors duration-200 tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {scrolled && <div className="divider" />}

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-5 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-gray-500 hover:text-black transition-colors"
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
