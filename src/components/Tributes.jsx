import { useState } from 'react'
import { Flower2, TreePine, Heart, Check, ArrowRight } from 'lucide-react'

const tributeOptions = [
  {
    id: 'roses',
    icon: Flower2,
    title: 'Classic Rose Bouquet',
    description: 'A beautiful arrangement of red and white roses',
    price: '$75',
    category: 'flowers',
  },
  {
    id: 'lily',
    icon: Flower2,
    title: 'Peace Lily Arrangement',
    description: 'Elegant white lilies symbolizing peace and sympathy',
    price: '$65',
    category: 'flowers',
  },
  {
    id: 'wildflower',
    icon: Flower2,
    title: 'Garden Wildflowers',
    description: "A vibrant mix of seasonal wildflowers she loved",
    price: '$55',
    category: 'flowers',
  },
  {
    id: 'memorial-tree',
    icon: TreePine,
    title: 'Memorial Tree',
    description: "Plant a tree in Rebecca's memory through One Tree Planted",
    price: '$50',
    category: 'trees',
  },
  {
    id: 'forest',
    icon: TreePine,
    title: 'Forest Restoration',
    description: 'Contribute to planting 10 trees in a national forest',
    price: '$100',
    category: 'trees',
  },
  {
    id: 'donation',
    icon: Heart,
    title: 'Charity Donation',
    description: "Donate to Nebraska Humane Society in Rebecca's name",
    price: 'Custom',
    category: 'donation',
  },
]

const filters = [
  { id: 'all', label: 'All' },
  { id: 'flowers', label: 'Flowers' },
  { id: 'trees', label: 'Plant a Tree' },
  { id: 'donation', label: 'Donations' },
]

export default function Tributes() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const [sent, setSent] = useState(new Set())

  const filtered = filter === 'all'
    ? tributeOptions
    : tributeOptions.filter((t) => t.category === filter)

  const handleSend = (id) => {
    setSent((prev) => new Set(prev).add(id))
    setSelected(null)
  }

  return (
    <section id="tributes" className="scroll-mt-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 py-16 sm:py-20">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-2">Honor Her Memory</p>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black">
            Send a Tribute
          </h2>
          <p className="text-sm text-gray-500 font-light mt-3 max-w-md leading-relaxed">
            Honor Rebecca's memory with flowers, a memorial tree, or a charitable donation.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-6 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`text-sm pb-1 transition-all duration-200 ${
                filter === f.id
                  ? 'text-black border-b-2 border-black font-medium'
                  : 'text-gray-400 hover:text-black'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Tribute grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {filtered.map((tribute) => {
            const Icon = tribute.icon
            const isSent = sent.has(tribute.id)
            return (
              <div
                key={tribute.id}
                className={`group cursor-pointer transition-opacity duration-300 ${isSent ? 'opacity-30 pointer-events-none' : ''}`}
                onClick={() => !isSent && setSelected(tribute.id)}
              >
                {/* Icon area */}
                <div className={`aspect-[4/3] flex items-center justify-center mb-4 transition-all duration-200 ${
                  selected === tribute.id
                    ? 'bg-black'
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <Icon
                    className={`w-10 h-10 transition-colors duration-200 ${
                      selected === tribute.id
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-gray-400'
                    }`}
                    strokeWidth={1}
                  />
                </div>

                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-sm font-medium text-black">{tribute.title}</h3>
                  <span className="text-sm font-bold text-black">{tribute.price}</span>
                </div>
                <p className="text-[13px] text-gray-400 font-light leading-relaxed mb-3">
                  {tribute.description}
                </p>

                {isSent ? (
                  <span className="inline-flex items-center gap-1.5 text-[13px] text-gray-500">
                    <Check className="w-4 h-4" /> Sent with love
                  </span>
                ) : selected === tribute.id ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSend(tribute.id)
                    }}
                    className="inline-flex items-center gap-2 bg-black text-white text-[13px] px-5 py-2.5 hover:bg-gray-800 transition-colors duration-200"
                  >
                    Confirm & Send <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
