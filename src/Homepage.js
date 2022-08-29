import './Homepage.css';
import { Link } from 'react-router-dom';
const Homepage = () => (
    <form action="/" method="get">
        <button className="head1">
            DEV@DEAKIN
        </button>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            className='SearchInput'
        />
        <button type="submit" className="head2">Post</button>
        <Link to='/signIn'>
        <button type="submit" className="head2" >LogIn</button>
        </Link>
    </form>
);

export default Homepage;