import { NavLink } from 'react-router-dom'
import './NavbarText.css'

const NavbarText = ({text, path }) => {
    return (
        <li className="nav-item">
            <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                <span className="nav-text">{text}</span>
            </NavLink>
        </li>
    )
}

export default NavbarText