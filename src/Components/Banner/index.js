import React, { useState, useEffect } from "react";
import Titulo from "Components/Titulo";
import styles from "./Banner.module.css";
import db from "data/db.json";

function Banner() {
  const [randomData, setRandomData] = useState({});

  useEffect(() => {
    const changeRandomData = () => {
      const randomIndex = Math.floor(Math.random() * db.length);
      setRandomData(db[randomIndex]);
    };

    const interval = setInterval(changeRandomData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.overlay}>
        <div>
          <Titulo>
            <div className={styles.categoria}>
              <h1>{randomData.categoria}</h1>
            </div>
          </Titulo>
          <Titulo>
            <h3>Challenge React</h3>
          </Titulo>
          <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <div>
          <img src={randomData.capa} alt="Imagen del Player" className={styles.imagen} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
