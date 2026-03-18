export default function Hero() {
  return (
    <section className="pt-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="py-16 sm:py-20 animate-fade-up">
          {/* Portrait + Text side by side on desktop, stacked on mobile */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-14">
            {/* Portrait */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 overflow-hidden animate-fade-up-delay-1">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
                alt="Rebecca A. Demuth"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.05] text-black animate-fade-up-delay-1">
                Rebecca Ann<br />Demuth
              </h1>

              <p className="text-gray-400 text-sm mt-4 tracking-wide animate-fade-up-delay-2">
                April 22, 1942 &mdash; February 28, 2025 &nbsp;&middot;&nbsp; Omaha, Nebraska
              </p>

              <p className="text-gray-500 text-[15px] font-light leading-relaxed mt-4 max-w-lg animate-fade-up-delay-2">
                A life lived with grace, love, and unwavering kindness. Beloved wife, mother, grandmother, and friend.
              </p>

              {/* Action links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-7 animate-fade-up-delay-3">
                <a
                  href="#tributes"
                  className="text-sm text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors duration-200"
                >
                  Send Flowers
                </a>
                <a
                  href="#tributes"
                  className="text-sm text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors duration-200"
                >
                  Plant a Tree
                </a>
                <a
                  href="#memorial-wall"
                  className="text-sm text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors duration-200"
                >
                  Leave a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />
    </section>
  )
}
