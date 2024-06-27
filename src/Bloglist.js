import { Link } from 'react-router-dom';


const Bloglist = ({ blogs, title }) => {
  return (
    <div className="Bloglist">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className='Blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}

      
    </div>
  );
}

export default Bloglist;
