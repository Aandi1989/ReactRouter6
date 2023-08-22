import { Routes, Route, Link } from 'react-router-dom';

import { Home} from './pages/Home';
import { About} from './pages/About';
import { Blog} from './pages/Blog';
import { Notfoundpage} from './pages/Notfoundpage';

function App() {
  return (
    <>
      <header className="text-white bg-bgColor h-16 flex justify-center items-center mb-2">
        <Link className="mr-4 hover:underline" to="/">Home</Link>
        <Link className="mr-4 hover:underline" to="/posts">Blog</Link>
        <Link className="hover:underline" to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  )
}


export default App;
