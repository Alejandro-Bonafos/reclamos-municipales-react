import { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../styles/ListaUtil.module.css";

function ListaHorizontal() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className={styles.listaContenedor}>
      <ListGroup horizontal className={styles.listaHorizontal}>
        <ListGroup.Item
          className={`${styles.itemHover} ${styles.microbasurales}`}
          data-aos="fade-right"
        >
          <div className={styles.circulo}>
          </div>
          Microbasurales
        </ListGroup.Item>

        <ListGroup.Item
          className={`${styles.itemHover} ${styles.recoleccion}`}
          data-aos="fade-up"
        >
          <div className={styles.circulo}>
          </div>
          Recolección y Residuos
        </ListGroup.Item>

        <ListGroup.Item
          className={`${styles.itemHover} ${styles.ramas}`}
          data-aos="fade-down"
        >
          <div className={styles.circulo}>
          </div>
          Ramas y Desmalezado
        </ListGroup.Item>

        <ListGroup.Item
          className={`${styles.itemHover} ${styles.otros}`}
          data-aos="fade-left"
        >
          <div className={styles.circulo}>
          </div>
          Otros...
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ListaHorizontal;
