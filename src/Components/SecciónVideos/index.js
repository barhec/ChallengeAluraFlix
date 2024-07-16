import React from 'react';
import Tarjeta from 'Components/Tarjetas';
import styles from "./SeccionVideos.module.css"

const SeccionVideos = ({ categoria, videos, categorias, onDelete, onSave, bordeColor }) => {
    return (
        <section className={styles.contenedor}>
            <div key={categoria}>
                <h2 className={styles[`textoCat${categoria.replace(/\s+/g, '')}`]}>{categoria}</h2>
                <div className={styles.videosPorCategoria}>
                    {videos.map((video) => (
                        <Tarjeta className={styles.pruebaTarjetas}
                            key={video.id}
                            video={video}
                            categorias={categorias}
                            onDelete={onDelete}
                            onSave={onSave}
                            bordeColor={bordeColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeccionVideos;
