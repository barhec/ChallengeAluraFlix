import React, {useState} from "react"
import Banner from "Components/Banner"
import Tarjeta from "Components/Tarjetas"
import styles from "./index.module.css"
import videos from "data/db.json"

function Inicio(){

    const [videosR, setVideosR] = useState(videos);

    const manejandoElBorrado = (id) => {
        setVideosR.filter((video) => video.id !== id);
    };

    const manejandoElSalvado = (updatedVideo) => {
        setVideosR(videos.map((video) =>
            video.id === updatedVideo.id ? updatedVideo : video
        ));
    }

    const categorias = [...new Set(videos.map((video) => video.categoria))];

    return(
        <>
        <Banner/>
        <section className={styles.contenedor}>
            {videos.map((video)=>(
                <Tarjeta
                    key={video.id}
                    video={video}
                    categorias={categorias}
                    onDelete={manejandoElBorrado}
                    onSave={manejandoElSalvado}
                />
            ))}
        </section>
        </>
    )
}

export default Inicio