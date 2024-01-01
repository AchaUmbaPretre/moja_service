import './navbar.scss';
import logo from './../../images/IMG-20230923-WA0000.jpg';
import { Link } from 'react-router-dom';
import { ArrowDropDown, BarChart, Search } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [bar, setBar] = useState(false);

  const handleBar = () => {
    setBar(!bar);
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 600) {
      setBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);

    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  return (
    <>
      <div className={active ? 'navbar bleu' : 'navbar'}>
        <div className="navbar-wrapper">
          <img src={logo} alt="" className="navbar-logo" />
          <div className="navbar-right">
            <ul className={bar ? 'navbar-ul navbarOpen' : 'navbar-ul'}>
              <li className="navbar-li">
                <a
                  href={'/'}
                  className={active ? 'bleu-link' : 'navbar-link'}
                  onClick={handleLinkClick}
                >
                  Accueil
                </a>
              </li>
              <li className="navbar-li">
                <a
                  href={'#apropos'}
                  className={active ? 'bleu-link' : 'navbar-link'}
                  onClick={handleLinkClick}
                >
                  Apropos
                </a>
              </li>
              <li className="navbar-li">
                <a
                  href={'#service'}
                  className={active ? 'bleu-link' : 'navbar-link'}
                  onClick={handleLinkClick}
                >
                  Services
                </a>
              </li>
              <li className="navbar-li">
                <a
                  href={'#skills'}
                  className={active ? 'bleu-link' : 'navbar-link'}
                  onClick={handleLinkClick}
                >
                  Nos spécialités
                </a>
              </li>
              <li className="navbar-li">
                <a
                  href={'#contact'}
                  className={active ? 'bleu-link' : 'navbar-link'}
                  onClick={handleLinkClick}
                >
                  Contact
                </a>
              </li>
            </ul>
            {bar ? (
              <CloseIcon className="navbar-bar active-red" onClick={handleBar} />
            ) : (
              <ClearAllIcon className="navbar-bar" onClick={handleBar} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;