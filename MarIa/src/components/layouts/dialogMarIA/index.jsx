import imgmap from "../../../assets/images/map2.svg"
import ballon from "../../../assets/images/falaMarIa.svg"
import MariaHabla from "../../../assets/images/MarIAhabla.svg"
import "./style.css"
export const DialogMarIA = () => {
    return(
        <section className="sectionDialog">
            <div className="dialog-wrapper">
                <img className="imgmap" src={imgmap} alt="" loading="lazy"/>
                <img className="MariaHabla" src={MariaHabla} alt="" loading="lazy"/>
                <img className="ballon" src={ballon} alt="" loading="lazy"/>
            </div>
        </section>
    )
}