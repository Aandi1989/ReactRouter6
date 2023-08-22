import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from './components/Layout'

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Blog />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  )
}


export default App;
