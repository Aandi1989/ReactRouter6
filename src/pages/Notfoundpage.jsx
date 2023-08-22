import { Link } from 'react-router-dom';

const Notfoundpage = () => {
    return (
        <div>
            This page doesn't exist. Go <Link className="underline" to="/">home</Link>
        </div>
    )
}

export {Notfoundpage}