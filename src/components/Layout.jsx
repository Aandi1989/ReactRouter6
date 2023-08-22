import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

export const Layout = () => {

    return (
        <div className='min-h-screen flex flex-col'>
            <header className="text-white bg-bgColor h-16 flex justify-center items-center mb-2">
                <CustomLink className="mr-4 hover:underline"  to="/">Home</CustomLink>
                <CustomLink className="mr-4 hover:underline" to="/posts">Blog</CustomLink>
                <CustomLink className="hover:underline" to="/about">About</CustomLink>
            </header>
            <main className="pl-2 flex-auto">
                <Outlet />
            </main>
            <footer className="p-2">© ReactRouter Tutorial 2023</footer>
        </div>
    )
}
