import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark,handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("posts.json")
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="w-3/4"> 
            <h2 className="text-3xl">This is blogs: {blogs.length}</h2>
            {
                blogs.map(blog=> <Blog handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}
export default Blogs;