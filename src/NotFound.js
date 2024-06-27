import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div class="not-found">
            <h1>Sorry</h1>
            <p>The page cant be found</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    )
}

export default NotFound;