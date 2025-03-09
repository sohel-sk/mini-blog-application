import { useState } from "react";
import { useNavigate } from "react-router-dom"

const CreatPost = () => {
    const [isLoading, setIsLoading]=useState(false);

    const [title, setTitle] =useState('');
    const [body, setBody] =useState('');
    const [author, setAuthor] =useState('');

    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, author, body};

        setIsLoading(true);

        fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            history('/');
        })
    }
    
    return (
        <div className="p-8 pt-14 text-center w-1/2 m- mx-auto bg-white text-gray-800  rounded max-w-4xl create-post">
            <h2 className="text-red-500 text-xl mb-3 text-center">Add a new blog</h2>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor=""  className="text-left block">Blog Title</label>
                <input type="text" 
                className="w-[100%] px-[6px] py-[10px] m-2 border border-gray-700 box-border rounded-md block" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                required/>

                <label htmlFor="" className="text-left block">Blog Author</label>
                <input type="text" 
                className="w-[100%] px-[6px] py-[10px] m-2 border rounded-md border-gray-700 box-border block" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required/>

                <label htmlFor="" 
                className="text-left block">Blog Body</label>
                <textarea 
                className="w-[100%] px-[6px] py-[10px] m-2 border border-gray-700 rounded-md box-border block"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required 
                ></textarea>

                {!isLoading && <button 
                className="bg-rose-500 text-white border-spacing-0 p-2 rounded-lg cursor-pointer "
                >Add Blog</button>}
                {isLoading && <button 
                className="bg-rose-500 text-white border-spacing-0 p-2 rounded-lg cursor-pointer "
                disabled
                >Adding Blog</button>}
            </form>
        </div>
    );
}
 
export default CreatPost;