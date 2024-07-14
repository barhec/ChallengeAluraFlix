import React from "react"
import iconoCerrar from "./CloseIcon.png"
import styles from "./BotonBorrar.module.css"

function BotonBorrar({onDelete}) {
    return(
        <button className={styles.btnCerrar} onClick={onDelete}>
            <img src={iconoCerrar} alt="Ícono Borrar"/>
            <h3>BORRAR</h3>
        </button>
    )
}

export default BotonBorrar