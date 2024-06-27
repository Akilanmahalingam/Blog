// import { useState,useEffect } from 'react';
// import Bloglist from './Bloglist';
// import useFetch from './useFetch';
// const Home = () => {
    
//     const { data:blogs ,isPending,error }= useFetch('http://localhost:8000/blogs');

//     return(
//         <div className="Home">
//             { isPending && <h4>Loading....</h4> }
//             { error && <h4>{ error }</h4> }            
//             { blogs && <Bloglist blogs={blogs} title="All Blogs" /> }
           
//         </div>
//     );
// }

// export default Home;
import { useState,useEffect } from 'react';
import blogsdata from './db.json'
import { Link } from 'react-router-dom';
import App from './App';

const Home=()=>{
    const blogs=blogsdata.blogs;
    return(
        <div className="Home">
            {blogs.map( (blog) =>(
                <div className="BlogPreview" key={blog.id}>
                    <Link to={ `/blogs/${blog.id}`}>
                        <h2>{ blog.title} </h2>
                        <p>{ blog.author }</p>
                    </Link>
                </div>
            ))}

            
        </div>
    )


}

export default Home;