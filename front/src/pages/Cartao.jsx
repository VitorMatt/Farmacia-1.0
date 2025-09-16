import { useState } from 'react';
import icon from '../assets/icon.png';
import cardIcon from '../assets/cartaoIcon.png';
import { Link } from 'react-router-dom';
import './css/Cartao.css';

function Cartao() {

    const [card, setCard] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [visible, setVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [card2, setCard2] = useState({});
    
    const cadastraCard = (e) => {

        e.preventDefault();

        setCard(true);

        let id = Math.floor(Math.random() * 1000);
                       
        let card2Aux = {
            name: name, 
            email: email, 
            password: password, 
            id: id
        };

        setCard2(card2Aux);
    }

  return (
    <div className='divMaior2'>

        {
            !visible&&
            <div className='divText2'>
                <h1>Adquira seu cartão já!</h1>
                <div className='divUnderline'>
                    <h3>Faça o seu cadastro</h3>
                </div>
                    <h3>e retire na loja.</h3>
                <h4>Não sabe onde nos localizamos?</h4>
            </div>
        }

        {
            (card) && !visible
            ?
            <div className='divCardDone'>
                <h1>Parabéns, você adquiriu seu cartão!</h1>
                <img src={icon} />
                <h3>Retire no nosso estabelecimento.</h3>
                <Link to='/'>
                    <button onClick={() => { setCard(false) }}>Voltar</button>
                </Link>
                <button onClick={() => { setVisible(true) }}>Ver cartão</button>
            </div>
            :
            visible
            ?
            <div className='divMaior3'>
            <div className='divCard'>
                <h1 id='h1Card1'>Cartão</h1>
                <h1 id='h1card2'>Cliente</h1>
                <div className='colorDiv'></div>
                <div>
                    <h1>Nome</h1>
                    <h2>{card2.name}</h2>
                </div>
                <div className='divEmail'>
                    <h1>Email</h1>
                    <h2>{card2.email}</h2>
                </div>
                <div>
                    <h1>Senha</h1>
                    {
                        !passwordVisible
                        ?
                        <div className='divPassword'>
                            <h2>****</h2>
                            <button onClick={() => { setPasswordVisible(true) }}>Ver senha</button>
                        </div>
                        :
                        <div className='divPassword'>
                            <h2>{card2.password}</h2>
                            <button onClick={() => { setPasswordVisible(false) }}>Ocultar</button>
                        </div>
                    }
                </div>
                <div>
                    <h1>Id</h1>
                    <h2>{card2.id}</h2>
                </div>
            </div>
                <button onClick={() => { setVisible(false), setPasswordVisible(false) }}>Fechar</button>
            </div>
            :
            <form onSubmit={cadastraCard}>
                <div className='divForm'>
                    <h2>Realize seu cadastro!</h2>
                    <label htmlFor='name'>Nome</label>
                    <input
                        placeholder='Seu nome'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        id='name'
                        type='text'
                        required
                        />
                    <label htmlFor='email'>Email</label>
                    <input
                        placeholder='Seu email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        id='email'
                        type='email'
                        required
                        />
                    <label htmlFor='password'>Crie uma senha</label>
                    <input
                        placeholder='Sua senha'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        id='password'
                        type='password'
                        minLength='4'
                        maxLength='4'
                        required/>
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>
        }
        <div className='divImg'>
            <img src={cardIcon} />
        </div>
    </div>
  );
};

export default Cartao;