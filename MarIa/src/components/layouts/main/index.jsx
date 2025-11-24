import corujitaMain from '../../../assets/images/corujitaMain.svg'
import './style.css'

export const Main = () =>{
    return(
<main>
<div className="mainLeft">
    <h2>A Terra precisa de você!  </h2>
    <p>Assuma o controle e torne-se um Guardião(a) e ajude a MarIA a tornar o planeta mais limpo!</p>
    <div className="buttonMain">
        <a href="">Download</a>
    </div>
</div>
    <img src={corujitaMain} alt="" />
</main>
    );
};