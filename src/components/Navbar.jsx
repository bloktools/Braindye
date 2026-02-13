import { Link } from 'react-router-dom'
import logo from '../assets/logo-light.svg'

const Navbar = () => {
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/" className='nav-link ignore-nav'><img src={logo} alt="BrainDye Logo" width="160px" height="40px" /></Link></li>
            </ul>
            <ul>
                <li><Link to="/" className='nav-link'>Home</Link></li>
                <li><Link to="/about" className='nav-link'>About</Link></li>
                <li><Link to="/dashboard" className="dashboard nav-link">Dashboard</Link></li>
                <li><Link to="/help" className='nav-link'>Help</Link></li>
                <li><Link to="/pricing" className='nav-link'>Pricing</Link></li>
            </ul>
            <ul>
                <li><Link to="/account" className='nav-link'>Account</Link></li>
                <li id="mobile-menu-button">&#9776;</li>
            </ul>
        </nav>

        <div id="mobile-menu">
            <ul>
                <li><Link to="/" className='nav-link'>Home</Link></li>
                <li><Link to="/about" className='nav-link'>About</Link></li>
                <li><Link to="/help" className='nav-link'>Help</Link></li>
                <li><Link to="/dashboard" className="dashboard nav-link">Dashboard</Link></li>
                <li><Link to="/pricing" className='nav-link'>Pricing</Link></li>
                <li><Link to="/account" className='nav-link'>Account</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar