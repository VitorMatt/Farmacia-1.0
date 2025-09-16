import './css/Footer.css';
import logo from '../assets/logo-p.png';

function Footer() {

  return (
    <div className='footer'>
      <div className='logo'>
        <img src={logo} />
        <h2>Sua saúde em primeiro lugar.</h2>
      </div>
      <div className='suporte'>
        <h2>Suporte</h2>
        <p>Central de ajuda</p>
        <p>Preços</p>
      </div>
      <div className='contatos'>
        <h2>Fale conosco</h2>
        <p>farmatech@gmail.com</p>
        <p>(48) 99115-5555</p>
      </div>
      <div className='termos'>
        <h2>Termos</h2>
        <p>Privacidade</p>
        <p>Termos</p>
      </div>
    </div>
  );
};

export default Footer;