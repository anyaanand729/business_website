import {Outlet, useNavigate} from 'react-router';
import './NavBar.css'

function NavBar() {
    const navigate = useNavigate();

    const Home = () => {
        navigate('/');// Navigates to /#/about
    };
    const Products1 = () => {
        navigate('/Product');
    };
    const Carts1 = () => {
        navigate('/Cart');
    };

    return (
        <>
            <div id="topPart">
                <button className="NavBar" onClick={Home}>Home Page</button>
                <button className="NavBar" onClick={Products1}>Schedule an Appointment</button>
                <button className="NavBar" onClick={Carts1}>Check Out</button>
            </div>
            <Outlet/>
        </>

    );
}

export default NavBar;
