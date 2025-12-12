import './style.css'
import imgstars from "../../../assets/images/stars.svg"

export const Aboutus = () => {
    return (
        <section className='container-info' id='aboutus'>
            <div className="aboutus-wrapper">
                
                <img className="star-decoration" src={imgstars} alt="" loading='lazy'/>
                
                <div className='content-info'>
                    <h2>Sobre nós</h2>
                    <p>Somos um grupo de estudantes do curso Técnico em Desenvolvimento de Sistemas movidos por um objetivo simples, mas poderoso transformar a educação ambiental em algo envolvente, divertido e acessível para todas as crianças. Criamos um aplicativo que une tecnologia, conscientização e brincadeira
                        Nosso compromisso é contribuir para um mundo mais verde, com crianças mais informadas, conscientes e preparadas para serem protagonistas da mudança. Juntos, estamos transformando aprendizado em impacto</p>
                </div>
            </div>
        </section>
    )
}