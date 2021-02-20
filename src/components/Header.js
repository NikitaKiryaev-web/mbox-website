import logo from "../images/Logo-header.svg";

function Header(props) {
  
  
  return(
  <div className="header">
    <img className="header__logo" src={logo}/>
    <nav className="header__nav">
      <a href="#" className="header__nav-link">Home</a>
      <a href="#" className="header__nav-link">TV Shows</a>
      <a href="#" className="header__nav-link">Movies</a>
      <a href="#" className="header__nav-link">Series</a>
    </nav>

    <ul className="header__buttons">
      <button className="header__button header__button_search" type="button"></button>
      <button className="header__button header__button_notifications" type="button"></button>
      <button className="header__button header__button_user" type="button"></button>
    </ul>
  </div>
  )
}

export default Header;