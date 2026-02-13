import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo-light.svg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/" className='nav-link ignore-nav'><img src={logo} alt="BrainDye Logo" width="160px" height="40px" /></Link></li>
            </ul>
            <ul>
                <li className="hide-mobile"><Link to="/" className='nav-link'>Home</Link></li>
                <li className="hide-mobile"><Link to="/about" className='nav-link'>About</Link></li>
                <li className="hide-mobile"><Link to="/dashboard" className="dashboard nav-link">Dashboard</Link></li>
                <li className="hide-mobile"><Link to="/help" className='nav-link'>Help</Link></li>
                <li className="hide-mobile"><Link to="/pricing" className='nav-link'>Pricing</Link></li>
            </ul>
            <ul>
                <li className="hide-mobile"><Link to="/account" className='nav-link'>Account</Link></li>
                <li class="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>&#9776;</li>
            </ul>
        </nav>
            {isMenuOpen && 

                <div id="mobile-menu">
                <ul onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <li><Link to="/" className='nav-link nav-link-mobile'>Home</Link></li>
                    <li><Link to="/about" className='nav-link nav-link-mobile'>About</Link></li>
                    <li><Link to="/help" className='nav-link nav-link-mobile'>Help</Link></li>
                    <li><Link to="/dashboard" className="dashboard nav-link nav-link-mobile">Dashboard</Link></li>
                    <li><Link to="/pricing" className='nav-link nav-link-mobile'>Pricing</Link></li>
                    <li><Link to="/account" className='nav-link nav-link-mobile'>Account</Link></li>
                </ul>
            </div>

        }

            
        
    </>
  )
}

export default Navbar