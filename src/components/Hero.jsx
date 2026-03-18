export default function Hero() {
  return (
    <section className="pt-14">
      {/* Full-width hero image */}
      <div className="w-full h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and details */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-16 pb-12 text-center">
        <div className="animate-in">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-10 ring-1 ring-stone-200">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
              alt="Rebecca A. Demuth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-stone-900 tracking-tight leading-[1.05] animate-in delay-1">
          Rebecca A. Demuth
        </h1>

        <p className="mt-5 text-[13px] tracking-[0.25em] uppercase text-stone-400 font-light animate-in delay-2">
          March 15, 1952 &mdash; January 8, 2025
        </p>

        <p className="mt-10 max-w-xl mx-auto font-serif text-xl sm:text-2xl italic text-stone-500 font-light leading-relaxed animate-in delay-3">
          A life lived with grace, love, and unwavering kindness.
        </p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 animate-in delay-4">
          <a href="#tributes" className="text-sm text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Send Flowers
          </a>
          <a href="#memorial-wall" className="text-sm text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            Leave a Message
          </a>
          <a href="#events" className="text-sm text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors">
            View Services
          </a>
        </div>
      </div>

      <div className="rule max-w-6xl mx-auto" />
    </section>
  )
}
