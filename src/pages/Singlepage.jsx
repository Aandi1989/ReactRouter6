import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
}, [id]);
  return (
    <div>
        {post && (
            <>
                <h1 className="text-2xl font-semibold mb-2 text-center py-5">{post.title}</h1>
                <p className="mb-5">{post.body}</p>
                <Link to={`/posts/${id}/edit`} className="font-semibold hover:underline">Edit this post</Link>
            </>
        )}
    </div>
  )
}