import { useState } from 'react'
import { Flame, Heart, Send, ChevronDown, MessageCircle } from 'lucide-react'

const initialPosts = [
  {
    id: 1,
    author: 'Sarah Anderson',
    relationship: 'Daughter',
    date: 'March 1, 2025',
    message: 'Mom, you were the strongest, most loving person I have ever known. Your garden will bloom again this spring, and I will think of you with every flower. I love you endlessly.',
    type: 'message',
    likes: 12,
  },
  {
    id: 2,
    author: 'Margaret Williams',
    relationship: 'Friend',
    date: 'March 1, 2025',
    message: 'Becky and I shared 40 years of friendship. She was the first to show up with a casserole when you were sick, and the last to leave a party. Heaven has gained the best hostess. Rest well, dear friend.',
    type: 'message',
    likes: 8,
  },
  {
    id: 3,
    author: 'David Demuth',
    relationship: 'Son',
    date: 'March 1, 2025',
    message: '',
    type: 'candle',
    likes: 15,
  },
  {
    id: 4,
    author: 'Lisa Chen',
    relationship: 'Former Student',
    date: 'March 2, 2025',
    message: 'Mrs. Demuth was the teacher who changed my life. She believed in me when no one else did. She made third grade magical and showed me that learning could be joyful. Thank you for everything.',
    type: 'message',
    likes: 6,
  },
  {
    id: 5,
    author: 'Tom & Janet Roberts',
    relationship: 'Neighbors',
    date: 'March 2, 2025',
    message: 'Rebecca was the heart of our neighborhood. Her Christmas cookie trays, her waves from the garden, her gentle wisdom over the fence. We will miss her dearly.',
    type: 'message',
    likes: 4,
  },
]

export default function MemorialWall() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState({ author: '', relationship: '', message: '' })
  const [postType, setPostType] = useState('message')
  const [showAll, setShowAll] = useState(false)
  const [likedPosts, setLikedPosts] = useState(new Set())

  const visiblePosts = showAll ? posts : posts.slice(0, 4)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (postType === 'candle' && !newPost.author) return
    if (postType === 'message' && (!newPost.author || !newPost.message)) return

    const post = {
      id: Date.now(),
      author: newPost.author,
      relationship: newPost.relationship || '',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      message: newPost.message,
      type: postType,
      likes: 0,
    }
    setPosts([post, ...posts])
    setNewPost({ author: '', relationship: '', message: '' })
  }

  const toggleLike = (id) => {
    setLikedPosts((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, likes: likedPosts.has(id) ? p.likes - 1 : p.likes + 1 }
          : p
      )
    )
  }

  return (
    <section id="memorial-wall" className="scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-6 py-16 sm:py-20">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-2">Share a Memory</p>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black">
            Memorial Wall
          </h2>
          <p className="text-sm text-gray-400 mt-2">{posts.length} tributes shared</p>
        </div>

        {/* Two-column layout: form left, posts right */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-16">
          {/* Compose form */}
          <div>
            <div className="sticky top-20">
              {/* Type toggle */}
              <div className="flex gap-6 mb-6">
                <button
                  onClick={() => setPostType('message')}
                  className={`text-[13px] transition-all duration-200 flex items-center gap-1.5 pb-1 ${
                    postType === 'message'
                      ? 'text-black border-b-2 border-black font-medium'
                      : 'text-gray-400 hover:text-black'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" /> Write a message
                </button>
                <button
                  onClick={() => setPostType('candle')}
                  className={`text-[13px] transition-all duration-200 flex items-center gap-1.5 pb-1 ${
                    postType === 'candle'
                      ? 'text-black border-b-2 border-black font-medium'
                      : 'text-gray-400 hover:text-black'
                  }`}
                >
                  <Flame className="w-4 h-4" /> Light a candle
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-sm text-black placeholder-gray-300 focus:border-black transition-colors duration-200"
                  placeholder="Your name"
                  required
                />
                <input
                  type="text"
                  value={newPost.relationship}
                  onChange={(e) => setNewPost({ ...newPost, relationship: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-sm text-black placeholder-gray-300 focus:border-black transition-colors duration-200"
                  placeholder="Relationship (optional)"
                />

                {postType === 'message' && (
                  <textarea
                    value={newPost.message}
                    onChange={(e) => setNewPost({ ...newPost, message: e.target.value })}
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-sm text-black placeholder-gray-300 focus:border-black transition-colors duration-200 resize-none"
                    placeholder="Share a memory, a kind word, or a story about Rebecca..."
                    required
                  />
                )}

                {postType === 'candle' && (
                  <div className="py-8 text-center">
                    <div className="text-4xl mb-3">🕯️</div>
                    <p className="text-sm text-gray-400 font-light italic">
                      A candle will be lit in Rebecca's memory
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-black text-white text-[13px] px-6 py-3 hover:bg-gray-800 transition-colors duration-200"
                >
                  <Send className="w-3.5 h-3.5" />
                  {postType === 'candle' ? 'Light Candle' : 'Post to Wall'}
                </button>
              </form>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-0">
            {visiblePosts.map((post, idx) => (
              <div
                key={post.id}
                className={`py-6 ${idx > 0 ? 'border-t border-gray-200' : ''}`}
              >
                {post.type === 'candle' ? (
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">🕯️</span>
                    <div>
                      <p className="text-sm text-black font-medium">{post.author}</p>
                      <p className="text-[12px] text-gray-400 font-light">
                        {post.relationship && `${post.relationship} · `}lit a candle in Rebecca's memory
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 font-light leading-[1.8] mb-3">
                      "{post.message}"
                    </p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-[13px] font-medium text-black">{post.author}</span>
                      {post.relationship && (
                        <span className="text-[11px] text-gray-400">{post.relationship}</span>
                      )}
                      <span className="text-[11px] text-gray-300 ml-auto">{post.date}</span>
                    </div>
                  </>
                )}

                <div className="mt-3">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`inline-flex items-center gap-1.5 text-[13px] transition-colors duration-200 ${
                      likedPosts.has(post.id) ? 'text-gray-700' : 'text-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5" fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                    {post.likes > 0 && <span>{post.likes}</span>}
                  </button>
                </div>
              </div>
            ))}

            {posts.length > 4 && !showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="flex items-center gap-2 pt-4 text-[13px] text-gray-400 hover:text-black transition-colors duration-200"
              >
                <ChevronDown className="w-4 h-4" />
                View all {posts.length} tributes
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="divider" />
    </section>
  )
}
