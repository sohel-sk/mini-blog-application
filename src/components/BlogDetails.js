import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { Delete } from "lucide-react";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate=useNavigate()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })

    }

    return (
        <div className="blog-details p-8 pt-14  w-full  bg-white text-gray-800 ">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2 className="text-xl  mb-3 text-rose-600">{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className="content md:m-[20px]">{blog.body}</div>
                    <button 
                    onClick={handleDelete}
                    className="bg-rose-500 text-white border-spacing-0 p-2 rounded-lg cursor-pointer "
                    >Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;