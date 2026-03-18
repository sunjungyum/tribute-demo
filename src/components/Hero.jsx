import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-16">
      {/* Full-width hero image with overlay */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              {/* Profile */}
              <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/30 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
                  alt="Rebecca A. Demuth"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-white/60 text-sm tracking-[0.25em] uppercase mb-4">
                March 15, 1952 &mdash; January 8, 2025
              </p>

              <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[1.05]">
                Rebecca A.<br />Demuth
              </h1>

              <p className="text-white/70 text-lg font-light mt-6 leading-relaxed">
                A life lived with grace, love, and unwavering kindness.
                She touched every heart she met.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#tributes" className="bg-white text-black px-7 py-3 text-sm font-medium hover:bg-neutral-100 transition-colors inline-flex items-center gap-2">
                  Send Flowers <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#memorial-wall" className="border border-white/40 text-white px-7 py-3 text-sm font-light hover:bg-white/10 transition-colors">
                  Leave a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
