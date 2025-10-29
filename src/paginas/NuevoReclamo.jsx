import styles from '../../styles/NuevoReclamo.module.css';
import FormularioReclamo from '../componentes/NuevoReclamoForm';


function NuevoReclamo() {


    return (
         <div className={styles.wrapper}>
            <section className={styles.titulopresentacion}>
                <h5>Aca podra cargar su reclamo</h5>
                <p>Este sistema permite cargar reclamos sobre residuos en el municipio.
                    Por cualquier duda, comunicarse con la Mesa de Entradas Municipal al Teléfono: 0345 123-4567 Int. 132.</p>
            </section>

            <section id="nuevo-reclamo" className={styles.presentacion}>
                <FormularioReclamo />
            </section>
        </div>
    );
}

export default NuevoReclamo;