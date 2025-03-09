import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found  p-8 pt-14  w-full min-h-screen bg-white text-gray-800  rounded s">
            <h2 className="text-4xl  mb-3">Sorry</h2>
            <p className="mb-3">Page not Found....</p>
            <Link 
            to={'/'}
            className="mt-7 box-border bg-rose-500 border-spacing-0 p-2 rounded-lg cursor-pointer"
            >Back to Home Page</Link>
        </div>
    );
}
 
export default NotFound;