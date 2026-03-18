import { MapPin, Clock, CalendarDays } from 'lucide-react'

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
    <section id="events" className="scroll-mt-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm tracking-[0.2em] uppercase text-neutral-400 mb-3">Schedule</p>
        <h2 className="text-4xl sm:text-5xl font-bold uppercase mb-16">
          Services &<br /><span className="font-light">Events</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white p-8 border border-neutral-100">
              <p className="text-sm tracking-[0.15em] uppercase font-medium mb-6">{event.type}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <CalendarDays className="w-4 h-4" />
                  <span className="font-light">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Clock className="w-4 h-4" />
                  <span className="font-light">{event.time}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{event.location}</p>
                    <p className="text-neutral-400 font-light">{event.address}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">{event.description}</p>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors"
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
