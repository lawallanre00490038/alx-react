import './Header.css';
import holberton_logo from '../holberton-logo.jpg';

const Header = () => {
  return (
    <>
      <img src={holberton_logo} alt="logo" />
      <h1>School dashboard</h1>
    </>
  )
}

export default Header