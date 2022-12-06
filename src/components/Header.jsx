import logo from '../../public/images/logo.png'

function Header() {  
  return (
    <header className="header">
        <img className="header__img" src={logo} alt="" />
        <div className="header__name">my travel journal</div>
    </header>
  )
}

export default Header
