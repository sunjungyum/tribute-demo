export default function Obituary() {
  return (
    <section id="obituary" className="scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6 py-16 sm:py-20">
        {/* Section heading */}
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-2">Her Story</p>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black">
            Obituary
          </h2>
        </div>

        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16">
          <div className="space-y-5">
            <p className="text-gray-600 font-light leading-[1.85] text-[15px]">
              Rebecca Ann Demuth, 82, of Omaha, Nebraska, passed away peacefully on February 28, 2025,
              surrounded by her loving family. Born on April 22, 1942, in Council Bluffs, Iowa, to
              Robert and Dorothy (Miller) Thompson, Rebecca grew up with a deep appreciation for
              community, family, and the simple joys of life.
            </p>

            <p className="text-gray-600 font-light leading-[1.85] text-[15px]">
              Rebecca graduated from Abraham Lincoln High School in 1960 and went on to earn her
              degree in Education from the University of Nebraska at Omaha. She dedicated over 30 years
              to teaching elementary school, where she was beloved by students and colleagues alike for
              her patience, creativity, and infectious enthusiasm for learning.
            </p>

            <p className="text-gray-600 font-light leading-[1.85] text-[15px]">
              On June 14, 1965, she married the love of her life, Thomas Demuth. Together they built
              a beautiful life filled with laughter, adventure, and unwavering devotion.
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-gray-600 font-light leading-[1.85] text-[15px]">
              Rebecca was a devoted mother to her three children and a cherished grandmother to her
              seven grandchildren, who affectionately called her "Nana Becca." An avid gardener,
              Rebecca could often be found tending to her roses or volunteering at the Lauritzen Gardens.
            </p>

            <p className="text-gray-600 font-light leading-[1.85] text-[15px]">
              She was an active member of St. John's Lutheran Church, where she participated in the
              choir and organized community outreach programs. Her warmth and generosity were felt by
              all who knew her.
            </p>

            <p className="text-gray-600 font-light leading-[1.85] text-[15px]">
              Rebecca is survived by her husband Thomas; children Sarah (Michael) Anderson, David
              (Jennifer) Demuth, and Emily (Robert) Collins; seven grandchildren; and her sister
              Patricia (James) Walker. She was preceded in death by her parents and her brother,
              Richard Thompson.
            </p>

            {/* Pull quote */}
            <div className="border-l-2 border-black pl-6 mt-4">
              <p className="text-lg font-light italic text-gray-700 leading-relaxed">
                "She made the world a little kinder, a little warmer, a little brighter."
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm font-light mt-10 leading-relaxed">
          In lieu of flowers, the family requests that memorial contributions be made to the
          Nebraska Humane Society or St. John's Lutheran Church Community Outreach Fund.
        </p>
      </div>

      <div className="divider" />
    </section>
  )
}
