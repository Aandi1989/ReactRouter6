import {useAuth} from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

export const Createpost = () => {
  const {signOut} = useAuth();
  const navigate = useNavigate();

  const signOutHandler = () => {
    signOut(() => navigate('/', {replace: true}))
  }
  return (
    <div>
        <h1 className="text-3xl text-center">Create a post</h1>
        <button className='ml-2 border rounded-sm px-2 bg-gray' onClick={signOutHandler}>Log Out</button>
    </div>
  )
}
