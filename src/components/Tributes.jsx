import { useState } from 'react'
import { Flower2, TreePine, Heart, Check } from 'lucide-react'

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
    description: 'A vibrant mix of seasonal wildflowers she loved',
    price: '$55',
    category: 'flowers',
  },
  {
    id: 'memorial-tree',
    icon: TreePine,
    title: 'Memorial Tree',
    description: 'Plant a tree in Rebecca\'s memory through One Tree Planted',
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
    description: 'Donate to Nebraska Humane Society in Rebecca\'s name',
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
    <section id="tributes" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm tracking-[0.2em] uppercase text-neutral-400 mb-3">Honor Her Memory</p>
        <h2 className="text-4xl sm:text-5xl font-bold uppercase mb-4">
          Send a<br /><span className="font-light">Tribute</span>
        </h2>
        <p className="text-sm text-neutral-500 font-light mb-12">
          Honor Rebecca's memory with flowers, a tree, or a charitable donation.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 text-sm transition-colors ${
                filter === f.id
                  ? 'bg-black text-white'
                  : 'text-neutral-500 hover:text-black border border-neutral-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Tribute grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((tribute) => {
            const Icon = tribute.icon
            const isSent = sent.has(tribute.id)
            return (
              <div
                key={tribute.id}
                className={`group cursor-pointer ${isSent ? 'opacity-50' : ''}`}
                onClick={() => !isSent && setSelected(tribute.id)}
              >
                <div className={`aspect-[4/3] flex items-center justify-center mb-5 transition-colors ${
                  selected === tribute.id
                    ? 'bg-neutral-100 ring-2 ring-black'
                    : 'bg-neutral-50 group-hover:bg-neutral-100'
                }`}>
                  <Icon className="w-12 h-12 text-neutral-300 group-hover:text-neutral-400 transition-colors" strokeWidth={1} />
                </div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-medium">{tribute.title}</h3>
                  <span className="text-sm font-bold">{tribute.price}</span>
                </div>
                <p className="text-[13px] text-neutral-400 font-light leading-relaxed mb-3">{tribute.description}</p>

                {isSent ? (
                  <span className="inline-flex items-center gap-1.5 text-sm text-neutral-500">
                    <Check className="w-4 h-4" /> Sent
                  </span>
                ) : selected === tribute.id ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSend(tribute.id)
                    }}
                    className="bg-black text-white text-sm px-6 py-2.5 hover:bg-neutral-800 transition-colors"
                  >
                    Confirm & Send
                  </button>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
      <div className="rule max-w-6xl mx-auto" />
    </section>
  )
}
