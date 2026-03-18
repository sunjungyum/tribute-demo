import { ArrowUpRight } from 'lucide-react'

const events = [
  {
    type: 'Visitation',
    date: 'Wednesday, March 5, 2025',
    time: '5:00 PM – 7:00 PM',
    location: 'John A. Gentleman Mortuaries',
    address: '1010 N 72nd Street, Omaha, NE 68114',
    mapUrl: 'https://maps.google.com/?q=1010+N+72nd+Street+Omaha+NE+68114',
    description: 'Family and friends are welcome to gather, share memories, and pay their respects.',
  },
  {
    type: 'Funeral Service',
    date: 'Thursday, March 6, 2025',
    time: '10:00 AM',
    location: "St. John's Lutheran Church",
    address: '7214 Maple Street, Omaha, NE 68134',
    mapUrl: 'https://maps.google.com/?q=7214+Maple+Street+Omaha+NE+68134',
    description: "A celebration of Rebecca's life with Pastor David Reynolds officiating. Reception to follow in the church fellowship hall.",
  },
  {
    type: 'Graveside Service',
    date: 'Thursday, March 6, 2025',
    time: '1:00 PM',
    location: 'Forest Lawn Memorial Park',
    address: '7909 Mormon Bridge Rd, Omaha, NE 68152',
    mapUrl: 'https://maps.google.com/?q=7909+Mormon+Bridge+Rd+Omaha+NE+68152',
    description: 'A private graveside service for immediate family.',
  },
]

export default function Events() {
  return (
    <section id="events" className="scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6 py-16 sm:py-20">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-2">Schedule</p>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black">
            Services & Events
          </h2>
        </div>

        {/* Grid of event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`py-6 md:py-4 md:pr-8 ${
                idx > 0 ? 'border-t md:border-t-0 md:border-l md:pl-8 border-gray-200' : ''
              }`}
            >
              <p className="text-[11px] tracking-[0.15em] uppercase text-gray-400 mb-3">
                {event.type}
              </p>

              <p className="text-base font-bold text-black mb-1">{event.date}</p>
              <p className="text-sm text-gray-500 mb-4">{event.time}</p>

              <p className="text-sm font-medium text-black">{event.location}</p>
              <p className="text-sm text-gray-400 font-light mb-3">{event.address}</p>

              <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                {event.description}
              </p>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors duration-200"
              >
                Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />
    </section>
  )
}
