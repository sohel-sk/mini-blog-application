import BlogList from "../components/BlogList";
import useFetch from "../utils/useFetch";

const Home = () => {    
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className=" p-8 pt-14  w-full min-h-screen bg-white text-gray-800  rounded s ">
            {error && <div>{error}</div>}
            {isLoading &&  <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
          {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Mario"  )} title="Mario's Blogs"/>}
        </div>
       
     );
}
 
export default Home;