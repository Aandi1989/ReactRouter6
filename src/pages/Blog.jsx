import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from "react";
import { BlogFilter } from '../components/BlogFilter';

const Blog = () => {
    const { posts } = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    return (
        <div>
            <h1 className="text-3xl text-center">Our news</h1>
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
            <Link className="hover:underline text-lg inline-block mb-2 ml-4" to="/posts/new">Add new post</Link>
            <Suspense fallback={<h2 className='text-center font-medium text-lg'>Loading...</h2>}>
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => (<>
                            {
                                resolvedPosts.filter(
                                    post => post.title.includes(postQuery) && post.id >= startsFrom
                                ).map(post => (
                                    <Link key={post.id} to={`/posts/${post.id}`}>
                                        <li className="hover:underline">{post.title}</li>
                                    </Link>
                                ))
                            }
                        </>)
                    }
                </Await>
            </Suspense>
        </div>
    )
}

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    return res.json()
}

const blogLoader = async () => {
    return defer({
        posts: getPosts()
    })
}

export { Blog, blogLoader }