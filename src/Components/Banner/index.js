import Titulo from "Components/Titulo"
import styles from "./Banner.module.css"
import Imagen from "./player.png"

function Banner(){
    return(
        <div className={styles.background}>
            <div className={styles.overlay}>
                <div>
                    <Titulo>
                        <div className={styles.categoria}>
                            <h1>FRONT END</h1>
                        </div>
                    </Titulo>
                    <Titulo>
                        <h2>Challenge React</h2>
                    </Titulo>
                    <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                <div>
                    <img src={Imagen} alt="Imagen del Player" className={styles.imagen}/>
                </div>
            </div>
        </div>
    )
}

export default Banner