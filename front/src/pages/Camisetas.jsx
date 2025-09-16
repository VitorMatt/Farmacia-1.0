import React from 'react';
import camisetaP from '../assets/camiseta1.avif';
import camisetaG from '../assets/camiseta2.avif';
import carrinho from '../assets/carrinho.png';
import camisetaNova from '../assets/camisetaNova.webp';
import camisetaNova2 from '../assets/camisetaNova2.webp';
import './css/Camisetas.css';

function Camisetas() {

  return (
    <div className='divMaiorCamisetas'>
        <h1>Promoções semanais</h1>
      <div className='divCamisetaP'>
        <h2>Camiseta P • <a>R$ 49,99</a></h2>
        <h2 className='novoPreco'>R$ 30,99</h2>
        <img className='imgCamiseta' src={camisetaP} />
        <img className='imgCarrinho' src={carrinho} />
        <button>Adicionar ao carrinho</button>
        <button>Comprar</button>
      </div>
      <div className='divCamisetaP'>
        <h2>Camiseta G • <a>R$ 49,99</a></h2>
        <h2 className='novoPreco'>R$ 30,99</h2>
        <img className='imgCamiseta' src={camisetaG} />
        <img className='imgCarrinho' src={carrinho} />
        <button>Adicionar ao carrinho</button>
        <button>Comprar</button>
      </div>
      <h1>Nova coleção especial</h1>
      <div className='divCamisetaP'>
        <h2>Vermelha P • <a>R$ 49,99</a></h2>
        <h2 className='novoPreco'>R$ 30,99</h2>
        <img className='imgCamiseta' src={camisetaNova} />
        <img className='imgCarrinho' src={carrinho} />
        <button>Adicionar ao carrinho</button>
        <button className='camisetaNova'>Comprar</button>
      </div>
      <div className='divCamisetaP'>
        <h2>Preta P • <a>R$ 49,99</a></h2>
        <h2 className='novoPreco'>R$ 30,99</h2>
        <img className='imgCamiseta' src={camisetaNova2} />
        <img className='imgCarrinho' src={carrinho} />
        <button>Adicionar ao carrinho</button>
        <button className='camisetaNova'>Comprar</button>
      </div>
    </div>
  );
};

export default Camisetas;