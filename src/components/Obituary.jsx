export default function Obituary() {
  return (
    <section id="obituary" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          {/* Left heading */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-neutral-400 mb-3">Her Story</p>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase leading-tight">
              Obit<span className="font-light">uary</span>
            </h2>
          </div>

          {/* Right content */}
          <div className="space-y-6 text-neutral-600 font-light leading-[1.85] text-[15px]">
            <p>
              Rebecca Ann Demuth, 72, of Omaha, Nebraska, passed away peacefully on January 8, 2025,
              surrounded by her loving family. Born on March 15, 1952, in Council Bluffs, Iowa, to
              Robert and Dorothy (Miller) Thompson, Rebecca grew up with a deep appreciation for
              community, family, and the simple joys of life.
            </p>
            <p>
              Rebecca graduated from Abraham Lincoln High School in 1970 and went on to earn her
              degree in Education from the University of Nebraska at Omaha. She dedicated over 30 years
              to teaching elementary school, where she was beloved by students and colleagues alike for
              her patience, creativity, and infectious enthusiasm for learning.
            </p>
            <p>
              On June 14, 1975, she married the love of her life, Thomas Demuth. Together they built
              a beautiful life filled with laughter, adventure, and unwavering devotion. Rebecca was a
              devoted mother to her three children and a cherished grandmother to her seven grandchildren,
              who affectionately called her "Nana Becca."
            </p>
            <p>
              An avid gardener, Rebecca could often be found tending to her roses or volunteering at the
              Lauritzen Gardens. She was an active member of St. John's Lutheran Church, where she
              participated in the choir and organized community outreach programs. Her warmth and
              generosity were felt by all who knew her.
            </p>
            <p>
              Rebecca is survived by her husband Thomas; children Sarah (Michael) Anderson, David
              (Jennifer) Demuth, and Emily (Robert) Collins; seven grandchildren; and her sister
              Patricia (James) Walker. She was preceded in death by her parents and her brother,
              Richard Thompson.
            </p>
            <p className="text-neutral-400 italic">
              In lieu of flowers, the family requests that memorial contributions be made to the
              Nebraska Humane Society or St. John's Lutheran Church Community Outreach Fund.
            </p>
          </div>
        </div>
      </div>
      <div className="rule max-w-6xl mx-auto" />
    </section>
  )
}
