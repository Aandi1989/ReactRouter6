import { NewPost } from '../components/NewPost';
import {useAuth} from '../hook/useAuth';
import { redirect, useNavigate, useNavigation } from 'react-router-dom';

export const Createpost = () => {
  const {signOut} = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const signOutHandler = () => {
    signOut(() => navigate('/', {replace: true}))
  }
  return (
    <div>
        <h1 className="text-3xl text-center mb-4">Create a post</h1>
        <NewPost submitting={navigation.state === 'submitting'} />
        <button className='ml-2 mt-4 border rounded-sm px-2 bg-gray' onClick={signOutHandler}>Log Out</button>
    </div>
  )
}

const createPost = async ({title, body, userId}) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title, body, userId})
  })
  const newPost = await res.json()

  return newPost
}

export const createPostAction = async ({request}) => {
  const formData = await request.formData();

  const newPost = {
    title:formData.get('title'),
    body:formData.get('body'),
    userId:formData.get('userId')
  }
  
  const post = await createPost(newPost)

  return redirect('/posts/' + post.id)
}
