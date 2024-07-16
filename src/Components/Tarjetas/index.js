import styles from "./Tarjetas.module.css"
import React, { useState } from "react"
import BotonBorrar from "Components/BotonBorrar";
import BotonEditar from "Components/BotonEditar";
import Modal from "Components/Modal";

function Tarjeta({video, categorias, onDelete, onSave, bordeColor}){
    const [reproduciendo, setReproduciendo] = useState(false);
    const [editando, setEditando] = useState(false);

    const manejandoElVideo = () => {
        setReproduciendo(true);
    }

    const manejandoElBorrado = () => {
        onDelete(video.id);
    }

    const manejandoElEditado = () => {
        setEditando(true);
    }

    const manejandoElCierre = () => {
        setEditando(false);
    }

    const manejandoElSalvado = (updatedVideo) => {
        onSave(updatedVideo);
        setEditando(false);
    }

    return(
        <section className={styles.contenedorGeneral}>
            <div className={styles.contenedorVideo} style={{borderColor: bordeColor}}>
                {!reproduciendo ? (
                    <img
                        src={video.capa}
                        className={styles.imagen}
                        alt="Miniatura del Video"
                        onClick={manejandoElVideo}
                        style={{cursor: "pointer"}}
                    />
                ) : (
                    <iframe
                        className={styles.video}
                        src={video.videoURL}
                        title="Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            <div className={styles.contenedorBotones} style={{borderColor: bordeColor}}>
                <BotonBorrar onDelete={manejandoElBorrado}/>
                <BotonEditar onEdit={manejandoElEditado}/>
            </div>
            {editando && (
                <Modal
                    video={video}
                    categorias={categorias}
                    onSave={manejandoElSalvado}
                    onClose={manejandoElCierre}
                />
            )}
        </section>
    )
}

export default Tarjeta