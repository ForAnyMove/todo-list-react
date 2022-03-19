import moon from '../img/icon-moon.svg';
import sun from '../img/icon-sun.svg';

import '../styles/header.css';

function Header() {
  return (
      <header className="app-header">
        <a href="#"><h1>TODO</h1></a>
        <img src={sun} alt=""></img>
      </header>
  );
}

export default Header;