import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Singlepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', {replace: true})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
}, [id]);
  return (
    <div>
        <button className='border p-0.5 rounded mt-4 mr-4' onClick={goBack}>Go back</button>
        <button className='border p-0.5 rounded mt-4' onClick={goHome}>Go home</button>
        {/* Bad approach. It's better to use Link instead goHome */}
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
