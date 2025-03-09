import { Link } from "react-router-dom";
const BlogList = ({blogs,title}) => {
    // const blogs = props.blogs;
    // console.log(props.blogs);
    return (
        <div className="blog-list">
            <h2 className="text-2xl">{title}</h2>
            {blogs.map((blog) => (
            <div className="flex  blog-preview p-3 m-4 shadow-md hover:shadow-xl rounded-md "  key={blog.id}>
                <Link to={`/blogs/${blog.id}`}> 
                    <div className="title-author-card w-full">
                    <h2 className="text-red-500 text-xl">{blog.title}</h2>
                    <p>Authored by {blog.author}</p>
                    </div>
                </Link>
            </div>
           ))}
        </div>
    );
}
 
export default BlogList;