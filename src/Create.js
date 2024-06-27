import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () =>
{

    const [title,settitle] = useState('');
    const [body,setbody] = useState('');
    const [author,setauthor] = useState('');
    const [ispending,setispending]=useState(false);

    const history=useHistory();

    const Handlesubmit = (e) => {
        e.preventDefault();
        setispending(true);
        const blogs = {title,body,author};
        console.log(blogs);

        fetch('http://localhost:8000/blogs' , {
            method:"POST",
            header: {"Content-Type":"application/json"},
            body: JSON.stringify(blogs)
        }).then( () => {
            console.log("New blog added successfully");
            setispending(false);
            history.push('/');
        })

    }
    return(
        <div className="Create">
            <form id="form" onSubmit={Handlesubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={ (e) => settitle(e.target.value)}
                />

                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={ (e) => setbody(e.target.value)}
                ></textarea>

                <label>Blog Author:</label>

                <select
                    value={author}

                    onChange={ (e) => setauthor(e.target.value)}
                >
                    <option value="Akilan">Akilan</option>
                    <option value="Sundhar">Sundhar</option>
                </select>

                {!ispending && <button id="add blog"> ADD BLOG </button>}
                { ispending && <button disabled >Adding Blog....</button>}
                <h1>{title}</h1>
                <h1>{body}</h1>
                <h1>{author}</h1>
            </form>
        </div>
    );
}

export default Create;