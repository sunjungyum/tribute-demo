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
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 italic mb-4">
          Send a Tribute
        </h2>
        <p className="text-sm text-stone-400 font-light mb-10">
          Honor Rebecca's memory with flowers, a tree, or a charitable donation.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-1 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-1.5 text-sm font-light transition-colors rounded-full ${
                filter === f.id
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-500 hover:text-stone-900'
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
                className={`group cursor-pointer ${isSent ? 'opacity-60' : ''}`}
                onClick={() => !isSent && setSelected(tribute.id)}
              >
                {/* Icon area */}
                <div className={`w-full aspect-[4/3] rounded-lg flex items-center justify-center mb-4 transition-colors ${
                  selected === tribute.id ? 'bg-stone-100 ring-1 ring-stone-900' : 'bg-stone-50 group-hover:bg-stone-100'
                }`}>
                  <Icon className="w-10 h-10 text-stone-300 group-hover:text-stone-400 transition-colors" strokeWidth={1} />
                </div>

                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm text-stone-900">{tribute.title}</h3>
                  <span className="text-sm text-stone-900 font-medium">{tribute.price}</span>
                </div>
                <p className="text-[13px] text-stone-400 font-light leading-relaxed mb-3">{tribute.description}</p>

                {isSent ? (
                  <span className="inline-flex items-center gap-1.5 text-[13px] text-sage-600">
                    <Check className="w-3.5 h-3.5" />
                    Sent
                  </span>
                ) : selected === tribute.id ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSend(tribute.id)
                    }}
                    className="text-[13px] bg-stone-900 text-white px-5 py-2 rounded-full hover:bg-stone-800 transition-colors"
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
