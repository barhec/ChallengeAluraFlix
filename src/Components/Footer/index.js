import styles from "./Footer.module.css"
import logo from "./LogoMain.png"
function Footer(){
    return(
        <footer className={styles.footer}>
            <section className={styles.footerContainer}>
                <img src={logo}/>
            </section>
        </footer>
    )
}

export default Footer