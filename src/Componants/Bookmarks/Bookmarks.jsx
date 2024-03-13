import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/4">
            <h2 className="text-3xl">Your Reading Time is: {readingTime}</h2>
            <h3 className="text-2xl">Bookmarks</h3>
            {
                bookmarks.map((element, idx)=> <p key={idx}>{element.title}</p>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.any,
    readingTime: PropTypes.any
}
export default Bookmarks;