import { Link } from "react-router-dom"
import styles from "./HeaderLinks.module.css"

function HeaderLinks(){
    return(
        <section className={styles.contenedorLinks}>
            <Link to="./" className={styles.linkHome}>
                HOME
            </Link>
            <Link to="./NuevoVideo" className={styles.linkVideoNuevo}>
                VIDEO NUEVO
            </Link>
        </section>
    )
}

export default HeaderLinks