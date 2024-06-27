// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";
// import { useHistory } from "react-router-dom";
// const BlogDetails = () => {

//     const { id } = useParams();
//     const { data: blog,error,isPending }=useFetch('http://localhost:8000/blogs/' + id);
//     const history=useHistory();
//     const handleDelete = () => {
//         fetch('http://localhost:8000/blogs/'+ blog.id ,{
//             method:'DELETE'
//         }).then( () => {
//             history.push('/');
//         })
//     }
//     return (
//         <div className="BlogDetails">
//         { isPending && <div>Loading..</div> }
//         { error && <div>{ error }</div> }
//         { blog && (
//             <article>
//                 <p>{ blog.title }</p>
//                 <p>Written By{ blog.author }</p>
//                 <p>{ blog.body }</p>
//                 <button onClick={ handleDelete }>DELETE</button>
//             </article>
//         )}
//         </div>
//     );
// }

// export default BlogDetails;
import { useParams } from "react-router-dom"
import blogsdata from './db.json'
const Blogdetails=() =>{
    const { idd }=useParams();
    const blogs=blogsdata.blogs;
    const blog= blogs.find((blog)=> {
        return blog.id===idd;
    })

    return(
        <div className="Blogdetails">
            <p>{blog.title}</p>
            <p>{blog.author}</p>
            <p>{blog.body}</p>
        </div>
    );
}

export default Blogdetails;

