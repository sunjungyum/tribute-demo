import { MapPin } from 'lucide-react'

const events = [
  {
    type: 'Visitation',
    date: 'Friday, January 10, 2025',
    time: '5:00 PM - 7:00 PM',
    location: 'John A. Gentleman Mortuary',
    address: '1010 N 72nd Street, Omaha, NE 68114',
    mapUrl: 'https://maps.google.com/?q=1010+N+72nd+Street+Omaha+NE+68114',
    description: 'Family and friends are welcome to gather, share memories, and pay their respects.',
  },
  {
    type: 'Funeral Service',
    date: 'Saturday, January 11, 2025',
    time: '10:00 AM',
    location: "St. John's Lutheran Church",
    address: '7214 Maple Street, Omaha, NE 68134',
    mapUrl: 'https://maps.google.com/?q=7214+Maple+Street+Omaha+NE+68134',
    description: 'A celebration of Rebecca\'s life with Pastor David Reynolds officiating. Reception to follow in the church fellowship hall.',
  },
  {
    type: 'Graveside Service',
    date: 'Saturday, January 11, 2025',
    time: '1:00 PM',
    location: 'Forest Lawn Memorial Park',
    address: '7909 Mormon Bridge Rd, Omaha, NE 68152',
    mapUrl: 'https://maps.google.com/?q=7909+Mormon+Bridge+Rd+Omaha+NE+68152',
    description: 'A private graveside service for immediate family.',
  },
]

export default function Events() {
  return (
    <section id="events" className="scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 italic mb-12">
          Services & Events
        </h2>

        <div className="space-y-0 divide-y divide-stone-200">
          {events.map((event, idx) => (
            <div key={idx} className="py-8 first:pt-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12">
                {/* Left column - type and time */}
                <div className="sm:w-44 flex-shrink-0">
                  <p className="text-[13px] tracking-[0.15em] uppercase text-sage-600 font-medium mb-1">
                    {event.type}
                  </p>
                  <p className="text-sm text-stone-400 font-light">{event.date}</p>
                  <p className="text-sm text-stone-400 font-light">{event.time}</p>
                </div>

                {/* Right column - details */}
                <div className="flex-1">
                  <p className="text-stone-900 font-normal mb-0.5">{event.location}</p>
                  <p className="text-sm text-stone-400 font-light mb-3">{event.address}</p>
                  <p className="text-sm text-stone-500 font-light leading-relaxed mb-3">{event.description}</p>
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rule max-w-6xl mx-auto" />
    </section>
  )
}
