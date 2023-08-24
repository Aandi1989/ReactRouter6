import { Link, useSearchParams, useLoaderData, defer, Await, json } from 'react-router-dom';
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
    const res = await fetch('https://jsonplaceholder.typicode.com/postsss')

    // if (!res.ok) {
    //     throw new Response('', { status: res.status, statusText: 'Not found' })
    // } /* этот способ вывода ошибки у меня не заработал */

    return res.json()
}

const blogLoader = async () => {
    const posts = getPosts()

    if(!posts.length){
        throw json({message:'Not Found', reason:'Wrong url'}, {status: 404})
    }

    return defer({
        posts
    })
}

export { Blog, blogLoader }