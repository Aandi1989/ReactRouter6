import { Route, Routes, Link } from 'react-router-dom';

const About = () => {
    return(
        <div className='pl-10'>
            <h1 className="text-3xl text-center">About us</h1>
            <p >This is a demo website about React-router-dom library.</p>
            <ul className='list-disc mb-10'>
                <li><Link to="contacts">Our Contacts</Link></li>
                <li><Link to="team">Our Team</Link></li>
            </ul>

            <Routes>
                <Route path="contacts" element={<p>Our contacts</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes>
        </div>
    )
}

export {About}