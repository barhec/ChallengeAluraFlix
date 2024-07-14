import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./LogoMain.png"
import HeaderLinks from "../HeaderLinks"

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContenedor}>
                    <img src={logo} alt="Logo AluraFlix"/>
                </section>
            </Link>
            <nav >
                <HeaderLinks/>
            </nav>
        </header>
    )
}

export default Header