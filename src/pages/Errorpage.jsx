import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    if(isRouteErrorResponse(error)){    
       
    // if(error.status === 404) {        /* example  from documentation*/
    //         return <div>This page doesn't exist!</div>;
    //     }

    //     if(error.status === 401) {
    //         return <div>You aren't authorized to see this</div>;
    //     }

    //     if(error.status === 503) {
    //         return <div>Looks like our API is down</div>;
    //     }

    //     if(error.status === 418) {
    //         return <div>I'm teapot</div>;
    //     }

    //     return <div>Something went wrong</div>

        
        return (
            <div className="text-center">
                <h1 className="font-semibold text-xl">{error.status}</h1>
                <h2 className="font-semibold">{error.data.message || 'Something goes wrong!'}</h2>
                <h3>{error.data.reason}</h3>
            </div>
        )
    }

    

    // return <div>'Something goes wrong!'</div>
    throw error
}

export default ErrorPage