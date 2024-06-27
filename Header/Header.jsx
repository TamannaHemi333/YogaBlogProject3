import { Link, useLocation } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/04/yoga-logo-1.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/pages" className={location.pathname === '/pages' ? 'active' : ''}>Pages</Link></li>
            <li><Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''}>Courses</Link></li>
            <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
            <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
            <li><Link to="/contactus" className={location.pathname === '/contactus' ? 'active' : ''}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;








