import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="text-center">
            <h1 className="font-semibold text-xl">{error.status}</h1>
            <h2 className="font-semibold">{error.data.message || 'Something goes wrong!'}</h2>
            <h3>{error.data.reason}</h3>
        </div>
    )
}

export default ErrorPage