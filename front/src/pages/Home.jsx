import cartao from '../assets/cartoes.png';
import camiseta from '../assets/camiseta1.avif';
import camisetaGrande from '../assets/camiseta2.avif';
import img from '../assets/img.png';
import { Link } from 'react-router-dom';
import './css/Home.css';

function Home() {

  return (
    <div className='divMaior'>
      <div className='divMaior2'>
        <div className='divText'>
          <h1>A melhor farmácia da região.</h1>
          <div className='text'>
            <div>
              <h3>Faça o seu cartão personalizado já!</h3>
              <Link to='/cartao'>
                <button>Realizar cartão</button>
              </Link>
            </div>
            <Link to='/cartao'>
              <img src={cartao} />
            </Link>
          </div>
        </div>
        <div className='divLogo'>
          <img src={img} />
        </div>
      </div>
      <div className='divPromocoes'>
        <h1>Camisetas Promocionais</h1>
        <div className='divCamisetas'>
          <div className='camisetas'>
            <div className='camisetaP'>
              <p>Camiseta Branca • R$30.99</p>
              <img src={camiseta} />
            </div>
            <div className='camisetaP'>
              <p>Camiseta Preta • R$30.99</p>
              <img src={camiseta} />
            </div>
            <div className='camisetaG'>
              <div>
                <h2>Compre agora por apenas R$30,99!</h2>
                <Link to='/camisetas'>
                  <button>Comprar</button>
                </Link>
              </div>
              <img src={camisetaGrande} />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;