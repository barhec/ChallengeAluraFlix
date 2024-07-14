import React, { useState, useEffect } from 'react';
import iconoCerrar from "./IconoCerrar.png";
import styles from "./Modal.module.css";

function Modal({ video, categorias, onSave, onClose }) {
    const [titulo, setTitulo] = useState(video.titulo);
    const [categoria, setCategoria] = useState(video.categoria);
    const [capa, setCapa] = useState(video.capa);
    const [videoURL, setVideoURL] = useState(video.videoURL);
    const [descripcion, setDescripcion] = useState(video.descripcion || '');

    useEffect(() => {
        setTitulo(video.titulo);
        setCategoria(video.categoria);
        setCapa(video.capa);
        setVideoURL(video.videoURL);
        setDescripcion(video.descripcion || '');
    }, [video]);

    const salvandoDatos = () => {
        onSave({
            ...video,
            titulo,
            categoria,
            capa,
            videoURL,
            descripcion,
        });
    };

    const manejandoLimpiar = () => {
        setTitulo('');
        setCategoria(categorias[0] || '');
        setCapa('');
        setVideoURL('');
        setDescripcion('');
    };

    return (
        <div className={styles.superposicionModal}>
            <div className={styles.modal}>
                <button className={styles.btnCerrar} onClick={onClose}>
                    <img src={iconoCerrar} alt="Ícono Cerrar" />
                </button>
                <h2>EDITAR TARJETA:</h2>
                <form className={styles.form}>
                    <label>
                        Titulo:
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </label>
                    <label>
                        Categoría:
                        <select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            {categorias.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Imagen:
                        <input
                            type="text"
                            value={capa}
                            onChange={(e) => setCapa(e.target.value)}
                        />
                    </label>
                    <label>
                        Video:
                        <input
                            type="text"
                            value={videoURL}
                            onChange={(e) => setVideoURL(e.target.value)}
                        />
                    </label>
                    <label>
                        Descripción:
                        <textarea
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        ></textarea>
                    </label>
                    <div className={styles.btnsForm}>
                        <button type="button" onClick={salvandoDatos}>
                            GUARDAR
                        </button>
                        <button type="button" onClick={manejandoLimpiar}>
                            LIMPIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal