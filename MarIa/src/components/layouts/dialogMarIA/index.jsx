import imgmap from "../../../assets/images/map2.svg"
import ballon from "../../../assets/images/falaMarIa.svg"
import MariaHabla from "../../../assets/images/MarIAhabla.svg"
import "./style.css"
export const DialogMarIA = () => {
    return(
        <section className="sectionDialog">
            <img className="imgmap" src={imgmap} alt="" />
            <img className="MariaHabla" src={MariaHabla} alt="" />
            <img className="ballon" src={ballon} alt="" />
        </section>
    )
}