import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";
const Blog = ({blog,handleBookmark,handleReadingTime,handleRemoveRead}) => {
    const {id,name,title, blog_cover,author_img,post_time,reading_time,hash_tag} = blog;
    return (
        <div>
            <img className='w-full' src={blog_cover} alt="" />
            <p className="text-2xl font-bold">{title}</p>
            <div className="flex justify-between">
            <div className='flex'>
                <img className='h-14 w14 rounded-full' src={author_img} alt="" />
                <div>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="">{post_time}</p>
                </div>
            </div>
            <div className='flex items-center'>
            <span>{reading_time} min read</span>
            <button onClick={()=>handleBookmark(blog)} className='mr-2 ml-2'><IoBookmarksOutline /></button>
            </div>
            </div>
            <p>
                {
                    hash_tag.map((hash, idx)=> <span className='text-blue-600 ' key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            <a onClick={()=>{handleReadingTime(reading_time);
            handleRemoveRead(id)}} className='text-blue-700 font-bold underline'>Mark as read</a>
        
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func.isRequired
}
export default Blog;