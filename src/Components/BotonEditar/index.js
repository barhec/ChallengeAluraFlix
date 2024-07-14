import React from "react"
import styles from "./BotonEditar.module.css"
import iconoEditar from "./EditIcon.png"

function BotonEditar({onEdit}) {
    return(
        <button className={styles.btnEditar}>
            <img src={iconoEditar} alt="Ícono Editar" onClick={onEdit}/>
            <h3>EDITAR</h3>
        </button>
    )
}

export default BotonEditar