import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/posts`);
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
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && posts.map((post) => (
        <div key={post._id}>
          <h3>{post.authorName}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
