import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>🧑‍💼 Mini LinkedIn</h1>
      <p>Welcome to your professional social network clone!</p>
    </div>
  );
}
import { useEffect, useState } from 'react';  
import styles from '../styles/Home.module.css';

export default function Home() {
   {
  return (
    <div>
      <h1>Welcome to Mini LinkedIn 🚀</h1>
    </div>
  );
}
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError('Could not load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">📢 Community Feed</h1>

        {loading && <p className="text-center text-gray-500">Loading posts...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && posts.length === 0 && <p className="text-center text-gray-400 italic">No posts found.</p>}

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.authorName}</h2>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
