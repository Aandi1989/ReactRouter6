import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {signIn} = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => { 
    event.preventDefault();

    const form = event.target;
    const user = form.userName.value;

    signIn(user, () => navigate(fromPage, {replace: true})); // replace: true для того чтобы мы по клику Назад не могли вернуться на форму регистрации
  }
  return (
    <div>
        <h1 className="text-3xl text-center">Login page</h1>
        <form onSubmit={handleSubmit}>
            <label >
                Name: <input className='border rounded-sm px-1' name="userName"/>
            </label>
            <button className='ml-2 border rounded-sm px-2 bg-gray' type="submit">Login</button>
        </form>
    </div>
  )
}
