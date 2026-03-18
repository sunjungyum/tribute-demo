import { useState } from 'react'
import { Flame, Heart, Send, ChevronDown, MessageCircle } from 'lucide-react'

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
    <section id="memorial-wall" className="scroll-mt-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-neutral-400 mb-3">Share a Memory</p>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase">
              Memorial<br /><span className="font-light">Wall</span>
            </h2>
          </div>
          <span className="text-sm text-neutral-400">{posts.length} messages</span>
        </div>

        {/* Post form */}
        <div className="bg-white border border-neutral-100 p-8 sm:p-10 mb-12">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setPostType('message')}
              className={`text-sm transition-colors flex items-center gap-1.5 ${
                postType === 'message'
                  ? 'text-black font-medium'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              <MessageCircle className="w-4 h-4" /> Write a message
            </button>
            <button
              onClick={() => setPostType('candle')}
              className={`text-sm transition-colors flex items-center gap-1.5 ${
                postType === 'candle'
                  ? 'text-black font-medium'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              <Flame className="w-4 h-4" /> Light a candle
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={newPost.author}
                onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-neutral-200 text-sm font-light placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                placeholder="Your name *"
                required
              />
              <input
                type="text"
                value={newPost.relationship}
                onChange={(e) => setNewPost({ ...newPost, relationship: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-neutral-200 text-sm font-light placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                placeholder="Relationship"
              />
            </div>

            {postType === 'message' && (
              <textarea
                value={newPost.message}
                onChange={(e) => setNewPost({ ...newPost, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-neutral-200 text-sm font-light placeholder-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="Share a memory, a kind word, or a story about Rebecca..."
                required
              />
            )}

            {postType === 'candle' && (
              <div className="py-10 text-center">
                <div className="text-5xl mb-3">🕯️</div>
                <p className="text-sm text-neutral-400 font-light">A candle will be lit in Rebecca's memory</p>
              </div>
            )}

            <button
              type="submit"
              className="bg-black text-white text-sm font-medium px-7 py-3 hover:bg-neutral-800 transition-colors inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              {postType === 'candle' ? 'Light Candle' : 'Post to Wall'}
            </button>
          </form>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {visiblePosts.map((post) => (
            <div key={post.id} className="bg-white border border-neutral-100 p-8">
              {post.type === 'candle' ? (
                <div className="text-center py-4">
                  <div className="text-4xl mb-3">🕯️</div>
                  <p className="text-sm font-medium">{post.author}</p>
                  {post.relationship && <p className="text-[13px] text-neutral-400 font-light">{post.relationship}</p>}
                  <p className="text-[13px] text-neutral-400 font-light mt-1">lit a candle in Rebecca's memory</p>
                </div>
              ) : (
                <>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-sm font-medium">{post.author}</span>
                    {post.relationship && (
                      <span className="text-[12px] text-neutral-400 font-light">{post.relationship}</span>
                    )}
                    <span className="text-[12px] text-neutral-300 font-light ml-auto">{post.date}</span>
                  </div>
                  <p className="text-sm text-neutral-600 font-light leading-[1.85]">{post.message}</p>
                </>
              )}
              <div className="mt-5 pt-4 border-t border-neutral-100">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                    likedPosts.has(post.id) ? 'text-red-500' : 'text-neutral-300 hover:text-red-400'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                  {post.likes > 0 && <span>{post.likes}</span>}
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length > 4 && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 mx-auto mt-8 text-sm text-neutral-500 hover:text-black transition-colors"
          >
            <ChevronDown className="w-4 h-4" />
            Show all {posts.length} messages
          </button>
        )}
      </div>
    </section>
  )
}
