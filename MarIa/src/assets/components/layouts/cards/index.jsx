import './style.css'
import innovationIcon from '../../../images/innovationIcon.svg'
import simplicityIcon from '../../../images/simplicityIcon.svg'

export const Cards = ()=>{
    return(
<section>
<div className="doubleCardContainer">
    <div className="doubleCard">
        <img src={simplicityIcon} alt="" />
        <h3>Simplicidade</h3>
    </div>
    <h4>Diversão Garantida</h4>
    <p>Gráficos minimalistas desenvolvidos com pixel art totalmente artesanal, criando um visual único que combina simplicidade, estilo retrô e personalidade em cada detalhe.</p>
</div>

<div className="doubleCardContainer">
    <div className="doubleCard">
        <img src={innovationIcon} alt="" />
        <h3>Inovação</h3>
    </div>
    <h4>Concientização com as ODS</h4>
    <p>Uma integração verdadeira entre conscientização e sustentabilidade, unindo informação, propósito e impacto para criar uma experiência que inspira mudanças reais.</p>
</div>

</section>
    );
};