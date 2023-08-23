import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div >
            <h1 className="text-3xl text-center">Our news</h1>
            <Link className="hover:underline text-lg inline-block mb-2 ml-4" to="/posts/new">Add new post</Link>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li className="hover:underline">{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export { Blog }