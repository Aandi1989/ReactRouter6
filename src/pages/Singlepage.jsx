import { Await, Link, useNavigate, useLoaderData, useAsyncValue } from 'react-router-dom';
import { Suspense } from "react";

const Post = () => {
  const post = useAsyncValue();

  return (
    <>
      <h1 className="text-2xl font-semibold mb-2 text-center py-5">{post.title}</h1>
      <p className="mb-5">{post.body}</p>
    </>
  )
}

export const Singlepage = () => {
  const { post, id } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      <button className='border p-0.5 rounded mt-4 mr-4' onClick={goBack}>Go back</button>
      <Suspense fallback={<h2 className='text-center font-medium text-lg'>Post is loading...</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <Link to={`/posts/${id}/edit`} className="font-semibold hover:underline">Edit this post</Link>
    </div>
  )
}

async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export const postLoader = async ({ params }) => {
  const id = params.id;



  return { post: getPostById(id), id }
}
