import logo from '../assets/logo-g.png';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {

  return (
    <nav>
      <img src={logo} />

      <div className='links'>
        <Link to='/'>
          <a>Início</a>
        </Link>
        <a>Medicamentos</a>
        <Link to='/camisetas' className='linkCamisetas'>
          <a>Camisetas</a>
        </Link>
        <a>Informações</a>
        <button>Entrar</button>
      </div>
    </nav>
  );
};

export default Header;