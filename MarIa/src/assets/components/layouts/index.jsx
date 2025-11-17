import avatarMarIa from '../../images/avatarMarIa.svg';
import './style.css';

export const Header = () => {
    return (
        
        <header>
            <h1>Mar<span>Ia</span></h1>

            <nav className='nav-header'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Jogos</a></li>
                    <li><a href="">Serviços</a></li>
                </ul>
            </nav>

            <img src={avatarMarIa} alt="Avatar personagem MarIa" />

    
        </header>
    );
};