import ClickableIcon from '../../ui/ClickableIcons';
import NavbarText from '../../ui/NavbarText';
import './Navbar.css'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const navText = [
  {
    text: "Sobre Mim",
    path: "/",
  },
  {
    text: "Projetos",
    path: "/projetos",
  },
  {
    text: "Experiência",
    path: "/experiencias",
  },
  {
    text: "Contato",
    path: "/contato",
  }
];

export const navIcons = [
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/joão-prado0"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/j.prado0/"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Joao-Prado0"
  }
];

const handleIconClick = (item) => {
  const win = window.open(item.url, '_blank');
  win.focus();
}

const NavBar = () => {

  return (
    <header className='navbar-container'>
      <div className='navbar-navitems'>
        {navText.map((item, index) => (
          <NavbarText
            key={index}
            text={item.text}
            path={item.path}
          />
        ))}
      </div>
      <div className='navbar-social-icons'>
        {navIcons.map((item, index) => (
          <ClickableIcon
            key={index}
            Icon={item.icon}
            onClick={() => handleIconClick(item)}
            size={30}
          />
        ))}
      </div>
    </header>
  )

}

export default NavBar