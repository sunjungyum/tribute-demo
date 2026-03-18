import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const sections = [
  {
    title: 'Quick Links',
    content: (
      <div className="space-y-2">
        <a href="#obituary" className="block text-sm text-stone-500 font-light hover:text-stone-900 transition-colors">Obituary</a>
        <a href="#events" className="block text-sm text-stone-500 font-light hover:text-stone-900 transition-colors">Services & Events</a>
        <a href="#tributes" className="block text-sm text-stone-500 font-light hover:text-stone-900 transition-colors">Send a Tribute</a>
        <a href="#memorial-wall" className="block text-sm text-stone-500 font-light hover:text-stone-900 transition-colors">Memorial Wall</a>
      </div>
    ),
  },
  {
    title: 'Funeral Home',
    content: (
      <div className="space-y-1 text-sm text-stone-500 font-light">
        <p>John A. Gentleman Mortuary</p>
        <p>1010 N 72nd Street</p>
        <p>Omaha, NE 68114</p>
        <p className="pt-1">(402) 391-1664</p>
        <p>info@johnagentleman.com</p>
      </div>
    ),
  },
]

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm text-stone-900">{title}</span>
        <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
        {/* Accordion sections */}
        <div className="border-t border-stone-200">
          {sections.map((section) => (
            <Accordion key={section.title} title={section.title}>
              {section.content}
            </Accordion>
          ))}
        </div>

        {/* About */}
        <div className="mt-12">
          <p className="text-[13px] text-stone-400 font-light leading-relaxed max-w-md">
            This memorial page was lovingly created to celebrate the life of
            Rebecca A. Demuth and to provide a place for family and friends to share their memories.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-stone-100">
          <p className="text-[12px] text-stone-300 font-light">
            &copy; {new Date().getFullYear()} Memorial Tributes. Created with love by the family.
          </p>
        </div>
      </div>
    </footer>
  )
}
