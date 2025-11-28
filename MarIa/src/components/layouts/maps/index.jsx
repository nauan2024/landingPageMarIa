import imgBeach from "../../../assets/images/Beach.svg"
import imgForest from "../../../assets/images/map2.svg"
import img from "../../../assets/images/map3.svg"

import './style.css'

export const Maps = () => {
    return (
        <section className='container-maps'>
            <h3>Mapas feitos em  <span>  Pixel art </span></h3>
            <article className='content-maps'>
                <img src={imgBeach} alt="" />
                <div className="group-img">
                    <img src={imgBeach} alt="" />
                    <img src={imgForest} alt="" />
                    <img src={img} alt="" />
                </div>
            </article>
        </section>
    )
}