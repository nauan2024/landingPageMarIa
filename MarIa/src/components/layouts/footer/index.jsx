import './style.css';
import avatarMarIa from '../../../assets/images/MarIA.svg';
import android from "../../../assets/images/androidicon.svg"
import LogoMarIA from "../../../assets/images/MarIA.svg"
export const Footer = () => {
    return (
        <footer>
            <div className="container-footer1">
                <img src={LogoMarIA} alt="" loading='lazy' />
                <div className="list-footer-content">
                    <h2>Quick links</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
                <div className="list-footer-content">
                    <h2>Help</h2>
                    <ul>
                        <li><a href="">Help Centre</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Forum</a></li>
                    </ul>
                </div>
                <div className="list-footer-content">
                    <h2>Social Media</h2>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="container-footer2">
                <a href="/MarIA-v0.3.apk" download="MarIA-v0.3.apk" className="button-style">
                    <img src={android} alt="" loading='lazy' />
                    Baixe agora
                </a>
            </div>
        </footer>
    )
}