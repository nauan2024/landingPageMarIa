import './style.css';
import innovationIcon from '../../../assets/images/imglampada.svg';
import simplicityIcon from '../../../assets/images/treeicon.svg';
import knowledgeIcon from '../../../assets/images/bookinthehand.svg';
import { Cards_feature } from '../cards_feature';
export const Cards = () => {
    return (
        <section className='section-cards' id='cards'>

            <h2>Features</h2>

            <div className="doubleCardContainer">
              <Cards_feature
              iconcard={simplicityIcon}
              titlecard={"Simplicidade"}
              subtitlecard={"Diversão Garantida"}
              pcard={"Gráficos minimalistas, em pixel art artesanal."}

              />
               <Cards_feature
              iconcard={innovationIcon}
              titlecard={"Inovação"}
              subtitlecard={"Concientização com as ODS"}
              pcard={"Integração entre conscientização e sustentabilidade."}

              />
               <Cards_feature
              iconcard={knowledgeIcon}
              titlecard={"Aprendizagem"}
              subtitlecard={"Gameficação com Reciclagem"}
              pcard={"Derrotar o lixo e salvar o planeta? parece um bom acordo. "}

              />
            </div>


        </section >
    );
};
