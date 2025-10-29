import { useState } from 'react';
import axios from 'axios';
import styles from "../../styles/Encuesta.module.css";

function Encuesta({ onClose }) {
    const [satisfaccion, setSatisfaccion] = useState('');
    const [comentario, setComentario] = useState('');
    const [mensajeEnviado, setMensajeEnviado] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const vecino_id = parseInt(localStorage.getItem("vecino_id"), 10);

        const encuestaData = {
            vecino_id,
            satisfaccion,
            comentario   
        };

        try {
            const res = await axios.post("http://localhost:3000/api/encuesta", encuestaData);
            console.log("Encuesta enviada:", res.data);
            setMensajeEnviado(true);
            setTimeout(() => {
                setMensajeEnviado(false);
                onClose();
            }, 1500);
        } catch (err) {
            console.error("Error al enviar encuesta:", err);
        }
    };


    return (
        <div className={styles.overlay}>
            <div className={styles.formContainer}>

                {mensajeEnviado && (
                    <div className={styles.confirmacion}>
                        ✅ Tu consulta fue enviada correctamente. ¡Gracias por contactarnos!
                    </div>
                )}
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <h5 className={styles.tituloEncuesta}>¿Qué tan satisfecho estás con nuestro servicio?</h5>

                    <select
                        className={styles.select}
                        value={satisfaccion}
                        onChange={(e) => setSatisfaccion(e.target.value)}
                        required
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="5">5 - Muy satisfecho</option>
                        <option value="4">4 - Satisfecho</option>
                        <option value="3">3 - Neutral</option>
                        <option value="2">2 - Insatisfecho</option>
                        <option value="1">1 - Muy insatisfecho</option>
                    </select>

                    <textarea
                        className={styles.textarea}
                        placeholder="Comentarios adicionales"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                    />

                    <button className={styles.boton} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Encuesta;

