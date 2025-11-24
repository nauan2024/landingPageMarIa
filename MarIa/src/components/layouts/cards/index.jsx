import './style.css';
import innovationIcon from '../../../assets/images/imglampada.svg';
import simplicityIcon from '../../../assets/images/treeicon.svg';
import knowledgeIcon from '../../../assets/images/bookinthehand.svg';

export const Cards = () => {
    return (
        <section className='section-cards'>

            <div className="doubleCardContainer">
                <div className="doubleCard">
                    <div className="upper_text_card">
                    <img src={simplicityIcon} alt="" />
                    <h2>Simplicidade</h2>
                    </div>
                    <div className="bottom_content_card">
                    <h3>Diversão Garantida</h3>
                    <p>Gráficos minimalistas, em pixel art artesanal.</p>
                    </div>
                </div>
                 <div className="doubleCard">
                    <div className="upper_text_card">
                    <img src={simplicityIcon} alt="" />
                    <h2>Simplicidade</h2>
                    </div>
                    <div className="bottom_content_card">
                    <h3>Diversão Garantida</h3>
                    <p>Gráficos minimalistas, em pixel art artesanal.</p>
                    </div>
                </div>
                 <div className="doubleCard">
                    <div className="upper_text_card">
                    <img src={simplicityIcon} alt="" />
                    <h2>Simplicidade</h2>
                    </div>
                    <div className="bottom_content_card">
                    <h3>Diversão Garantida</h3>
                    <p>Gráficos minimalistas, em pixel art artesanal.</p>
                    </div>
                </div>
              
            </div>


        </section >
    );
};
