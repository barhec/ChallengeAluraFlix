import React, { useState } from "react";
import Banner from "Components/Banner";
import SeccionVideos from "Components/SecciónVideos";
import styles from "./index.module.css";
import videos from "data/db.json";

function Inicio() {
    const [videosR, setVideosR] = useState(videos);
    const categoriaSeleccionadaUno = "FRONT END";
    const categoriaSeleccionadaDos = "BACK END";
    const categoriaSeleccionadaTres = "INNOVACIÓN Y GESTIÓN";

    const coloresPorCategoria = {
        "FRONT END": "#6BD1FF",
        "BACK END": "#00C86F",
        "INNOVACIÓN Y GESTIÓN": "#FFBA05",
    };

    const manejandoElBorrado = (id) => {
        setVideosR(videosR.filter((video) => video.id !== id));
    };

    const manejandoElSalvado = (updatedVideo) => {
        setVideosR(videosR.map((video) =>
            video.id === updatedVideo.id ? updatedVideo : video
        ));
    };

    const categorias = [...new Set(videos.map((video) => video.categoria))];
    const videosFiltradosFront = videosR.filter(video => video.categoria === categoriaSeleccionadaUno);
    const videosFiltradosBack = videosR.filter(video => video.categoria === categoriaSeleccionadaDos);
    const videosFiltradosInnovacion = videosR.filter(video => video.categoria === categoriaSeleccionadaTres);

    return (
        <section>
            <Banner />
            <SeccionVideos
                categoria={categoriaSeleccionadaUno}
                videos={videosFiltradosFront}
                categorias={categorias}
                onDelete={manejandoElBorrado}
                onSave={manejandoElSalvado}
                bordeColor={coloresPorCategoria[categoriaSeleccionadaUno]}
            />
            <SeccionVideos
                categoria={categoriaSeleccionadaDos}
                videos={videosFiltradosBack}
                categorias={categorias}
                onDelete={manejandoElBorrado}
                onSave={manejandoElSalvado}
                bordeColor={coloresPorCategoria[categoriaSeleccionadaDos]}
            />
            <SeccionVideos
                categoria={categoriaSeleccionadaTres}
                videos={videosFiltradosInnovacion}
                categorias={categorias}
                onDelete={manejandoElBorrado}
                onSave={manejandoElSalvado}
                bordeColor={coloresPorCategoria[categoriaSeleccionadaTres]}
            />
        </section>
    );
}

export default Inicio;
