import styles from '../../styles/NuevoReclamo.module.css';
import FormularioReclamo from '../componentes/NuevoReclamoForm';


function NuevoReclamo() {


    return (
         <div className={styles.wrapper}>
            <section className={styles.titulopresentacion}>
                <h3>Aca podes cargar tu reclamo</h3>
                <p>Este sistema permite cargar reclamos sobre residuos en el municipio.
                    Por cualquier duda, comunicarse con la Mesa de Entradas Municipal al Teléfono: +54 (0362) 444-5555 Int. 132.</p>
            </section>

            <section id="nuevo-reclamo" className={styles.presentacion}>
                <FormularioReclamo />
            </section>
        </div>
    );
}

export default NuevoReclamo;