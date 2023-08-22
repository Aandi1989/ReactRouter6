import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header className="text-white bg-bgColor h-16 flex justify-center items-center mb-2">
                <NavLink className="mr-4 hover:underline" to="/">Home</NavLink>
                <NavLink className="mr-4 hover:underline" to="/posts">Blog</NavLink>
                <NavLink className="hover:underline" to="/about">About</NavLink>
            </header>
            <main className="pl-2">
                <Outlet />
            </main>
            <footer className="pl-2">2023</footer>
        </>
    )
}
