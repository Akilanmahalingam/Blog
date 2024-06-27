import { Link } from 'react-router-dom';

const Navv = () => {
    return(
        <nav className="Navv">
            <h1>Akil Blog</h1>
            <div className="links">
                <Link id="home" to="/show">Home</Link>
                <Link id="create" to="/create" style={
                    {
                        color:"white",
                        backgroundColor:'#98FB98',
                        borderRadius:'8px'
                    }
                }>New Blog</Link>
                
            </div>
        </nav>
    );
}

export default Navv;