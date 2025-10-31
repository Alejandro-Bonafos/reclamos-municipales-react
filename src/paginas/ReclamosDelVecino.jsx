import styles from '../../styles/ReclamosDelVecino.module.css';
import ReclamosVecino from '../componentes/ReclamosVecino';


function ReclamosDelVecino() {


    return (
        <div className={styles.wrapper}>
            <section className={styles.titulopresentacion}>
                <h3>Aca podra ver el estado de sus reclamos</h3>
                <p>Este sistema permite la consulta del estado de los reclamos iniciados.
                    Por cualquier duda, comunicarse con la Mesa de Entradas Municipal al Teléfono: +54 (0362) 444-5555 Int. 132.</p>
            </section>

            <section id="reclamos-vecino" className={styles.presentacion}>
                <ReclamosVecino />
            </section>
        </div>
    );
}

export default ReclamosDelVecino;
