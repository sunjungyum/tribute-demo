import { useState } from 'react'
import { Flame, Heart, Send, ChevronDown } from 'lucide-react'

const initialPosts = [
  {
    id: 1,
    author: 'Sarah Anderson',
    relationship: 'Daughter',
    date: 'January 9, 2025',
    message: 'Mom, you were the strongest, most loving person I have ever known. Your garden will bloom again this spring, and I will think of you with every flower. I love you endlessly.',
    type: 'message',
    likes: 12,
  },
  {
    id: 2,
    author: 'Margaret Williams',
    relationship: 'Friend',
    date: 'January 9, 2025',
    message: 'Becky and I shared 40 years of friendship. She was the first to show up with a casserole when you were sick, and the last to leave a party. Heaven has gained the best hostess. Rest well, dear friend.',
    type: 'message',
    likes: 8,
  },
  {
    id: 3,
    author: 'David Demuth',
    relationship: 'Son',
    date: 'January 9, 2025',
    message: '',
    type: 'candle',
    likes: 15,
  },
  {
    id: 4,
    author: 'Lisa Chen',
    relationship: 'Former Student',
    date: 'January 10, 2025',
    message: 'Mrs. Demuth was the teacher who changed my life. She believed in me when no one else did. She made third grade magical and showed me that learning could be joyful. Thank you for everything.',
    type: 'message',
    likes: 6,
  },
  {
    id: 5,
    author: 'Tom & Janet Roberts',
    relationship: 'Neighbors',
    date: 'January 10, 2025',
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
    <section id="memorial-wall" className="scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 italic">
            Memorial Wall
          </h2>
          <span className="text-[13px] text-stone-400 font-light">{posts.length} messages</span>
        </div>

        {/* Post form */}
        <div className="mb-16">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setPostType('message')}
              className={`text-sm font-light transition-colors ${
                postType === 'message'
                  ? 'text-stone-900 underline underline-offset-4 decoration-stone-900'
                  : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              Write a message
            </button>
            <button
              onClick={() => setPostType('candle')}
              className={`text-sm font-light transition-colors flex items-center gap-1.5 ${
                postType === 'candle'
                  ? 'text-stone-900 underline underline-offset-4 decoration-stone-900'
                  : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              Light a candle
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={newPost.author}
                onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-stone-200 text-stone-900 text-sm font-light placeholder-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
                placeholder="Your name *"
                required
              />
              <input
                type="text"
                value={newPost.relationship}
                onChange={(e) => setNewPost({ ...newPost, relationship: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-stone-200 text-stone-900 text-sm font-light placeholder-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
                placeholder="Relationship"
              />
            </div>

            {postType === 'message' && (
              <textarea
                value={newPost.message}
                onChange={(e) => setNewPost({ ...newPost, message: e.target.value })}
                rows={3}
                className="w-full px-0 py-3 bg-transparent border-b border-stone-200 text-stone-900 text-sm font-light placeholder-stone-300 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                placeholder="Share a memory or kind word..."
                required
              />
            )}

            {postType === 'candle' && (
              <div className="py-8 text-center">
                <div className="text-4xl mb-2">🕯️</div>
                <p className="text-[13px] text-stone-400 font-light">A candle will be lit in Rebecca's memory</p>
              </div>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-stone-900 text-white text-sm font-light px-6 py-2.5 rounded-full hover:bg-stone-800 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              {postType === 'candle' ? 'Light Candle' : 'Post'}
            </button>
          </form>
        </div>

        {/* Posts */}
        <div className="divide-y divide-stone-100">
          {visiblePosts.map((post) => (
            <div key={post.id} className="py-8 first:pt-0">
              {post.type === 'candle' ? (
                <div className="text-center py-4">
                  <div className="text-3xl mb-2">🕯️</div>
                  <p className="text-sm text-stone-900">{post.author}</p>
                  <p className="text-[13px] text-stone-400 font-light">lit a candle</p>
                </div>
              ) : (
                <>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-sm text-stone-900">{post.author}</span>
                    {post.relationship && (
                      <span className="text-[12px] text-stone-400 font-light">{post.relationship}</span>
                    )}
                    <span className="text-[12px] text-stone-300 font-light ml-auto">{post.date}</span>
                  </div>
                  <p className="text-[15px] text-stone-500 font-light leading-[1.8]">{post.message}</p>
                </>
              )}

              <div className="mt-4">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`inline-flex items-center gap-1 text-[13px] transition-colors ${
                    likedPosts.has(post.id) ? 'text-red-500' : 'text-stone-300 hover:text-red-400'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5" fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                  {post.likes > 0 && <span>{post.likes}</span>}
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length > 4 && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-1.5 mx-auto mt-8 text-sm text-stone-400 hover:text-stone-900 font-light transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
            Show all {posts.length}
          </button>
        )}
      </div>

      <div className="rule max-w-6xl mx-auto" />
    </section>
  )
}
