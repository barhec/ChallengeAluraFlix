import { Link, useLocation } from "react-router-dom"
import styles from "./HeaderLinks.module.css"

function HeaderLinks(){
    const location = useLocation()

    return(
        <section className={styles.contenedorLinks}>
            <Link to="./" className={`${styles.linkHome} ${
          location.pathname === "/" ? styles.activeLink : ""
        }`}>
                HOME
            </Link>
            <Link to="./NuevoVideo" className={`${styles.linkHome} ${
          location.pathname === "/NuevoVideo" ? styles.activeLink : ""
        }`}>
                VIDEO NUEVO
            </Link>
        </section>
    )
}

export default HeaderLinks