import styles from "./NuevoVideo.module.css"
import Form, { string, useForm } from "react-form-ease"

import React, { useState, useEffect } from 'react';
import db from '../../data/db.json';

function NuevoVideo(){
    const [categorias, setCategorias] = useState([]);

    const {formData, updateForm, errors, validateInput, handleSubmit, resetForm} = useForm({
        data: {
            titulo: "",
            categoria: "",
            capa: "",
            videoURL: "",
            descripcion:""
        },
        validations: {
            titulo: (value) => string(value).required('Ingresa el nombre del video').validate(),
            categoria: (value) => string(value).required('Ingresa la categoría del video').validate(),
            capa: (value) => string(value).required('Ingresa el link de la imagen del video').validate(),
            videoURL: (value) => string(value).required('Ingresa el link del video').validate(),
            descripcion: (value) => string(value).required('Ingresa la descripción del video').max(100, 'Has superado el límite de 100 caracteres').validate(),
        },

        onSubmit: (data) => {
            console.log(data);
        }
    });

    useEffect(() => {
        const categoriasUnicas = [...new Set(db.map(item => item.categoria))];
        setCategorias(categoriasUnicas);
    }, []);

    const handleReset = () => {
        resetForm();
    };

    return(
        <section className={styles.bodySection}>
            <div className={styles.tituloNuevo}>
                <h5>NUEVO VIDEO</h5>
                <h6>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h6>
            </div>
            <Form onSubmit={handleSubmit} form={{formData, updateForm, errors, validateInput}}>
                <div className={styles.subtitulo}>
                    <h4>Crear Tarjeta</h4>
                </div>
                <div className={styles.filaUnoImputs}>
                    <div className={styles.contenedorTitulo}>
                        <label className={styles.nombreDelLabel}>Título</label>
                        <input
                            type="text"
                            className={styles.inputTitulo}
                            value={formData.titulo}
                            onChange={(e) => updateForm({titulo: e.target.value})}
                            onBlur={() => validateInput('titulo')}
                            placeholder="Ingrese el título del video"
                            name="Título"
                        />
                        <p className={styles.mensajesDeError}>{errors?.titulo}</p>
                    </div>
                    <div className={styles.contenedorCategoria}>
                        <label className={styles.nombreDelLabel}>Categoría</label>
                        <select
                            type="text"
                            className={styles.inputCategoria}
                            value={formData.categoria}
                            onChange={(e) => updateForm({categoria: e.target.value})}
                            onBlur={() => validateInput('categoria')}
                            name="Categoría"
                        >
                            <option value="" disabled className={styles.opcionesCategorias}>Elija una Categoría</option>
                            {categorias.map((categoria, index) =>(
                                <option key={index} value={categoria} className={styles.opcionesDesplegables}>{categoria}</option>
                            ))}
                        </select>
                        <p className={styles.mensajesDeError}>{errors?.categoria}</p>
                    </div>
                </div>
                <div className={styles.filaDosImputs}>
                    <div className={styles.contenedorImagen}>
                        <label className={styles.nombreDelLabel}>Imagen</label>
                        <input
                            type="text"
                            className={styles.inputImagen}
                            value={formData.capa}
                            onChange={(e) => updateForm({capa: e.target.value})}
                            onBlur={() => validateInput('capa')}
                            placeholder="Ingresa el link de la imagen del video"
                            name="Imagen"
                        />
                        <p className={styles.mensajesDeError}>{errors?.capa}</p>
                    </div>
                    <div className={styles.contenedorVideo}>
                        <label className={styles.nombreDelLabel}>Video</label>
                        <input
                            type="text"
                            className={styles.inputVideo}
                            value={formData.videoURL}
                            onChange={(e) => updateForm({videoURL: e.target.value})}
                            onBlur={() => validateInput('videoURL')}
                            placeholder="Ingresa el link del video"
                            name="Video"
                        />
                        <p className={styles.mensajesDeError}>{errors?.videoURL}</p>
                    </div>
                </div>
                
                <div className={styles.contenedorDescripcion}>
                    <label className={styles.nombreDelLabel}>Descripción</label>
                    <input
                        type="text"
                        className={styles.inputDescripcion}
                        value={formData.descripcion}
                        onChange={(e) => updateForm({descripcion: e.target.value})}
                        onBlur={() => validateInput('descripcion')}
                        placeholder="Ingresa una descripción"
                        name="Descripción"
                    />
                    <p className={styles.mensajesDeError}>{errors?.descripcion}</p>
                </div>
                <div className={styles.btnContenedor}>
                    <button type="submit" className={styles.btnGuardar}>Guardar</button>
                    <button type="submit" className={styles.btnLimpiar} onClick={handleReset}>Limpiar</button>
                </div>
            </Form>
        </section>
    )
}

export default NuevoVideo