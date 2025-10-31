import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/ReclamosVecino.module.css";

const ReclamosVecino = () => {
  const [loading, setLoading] = useState(true);
  const [reclamos, setReclamos] = useState([]);
  const [error, setError] = useState("");

  const vecino_id = parseInt(localStorage.getItem("vecino_id"), 10); 
  console.log("ID leído desde localStorage:", vecino_id);

  useEffect(() => {
    if (!vecino_id) {
      setError("No se encontró el vecino. Iniciá sesión nuevamente.");
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:3000/api/vecinos/reclamos`, {
        params: { vecino_id },
      })
      .then((res) => setReclamos(res.data))
      .catch((err) => {
        console.error(err);
        setError(err.response?.data?.message || "Error al obtener los reclamos");
      })
      .finally(() => setLoading(false));
  }, [vecino_id]);

  console.log("📥 Reclamos recibidos:", reclamos);

  return (
    <section className={styles.holder}>

  {loading ? (
    <p className={styles.loading}>Cargando reclamos...</p>
  ) : error ? (
    <p className={styles.error}>{error}</p>
  ) : reclamos.length === 0 ? (
    <p className={styles.sinReclamos}>No se encontraron reclamos.</p>
  ) : (
    <table className={`table table-hover ${styles.reclamosTabla}`}>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Descripción</th>
          <th>Dirección</th>
          <th>Fecha</th>
          <th>Imagen</th>
          <th>Estado</th> 
          <th>Comentarios</th>
        </tr>
      </thead>
      <tbody>
        {reclamos.map((r) => (
          <tr key={r.id}>
            <td>{r.tipo}</td>
            <td>{r.descripcion}</td>
            <td>{r.direccion}</td>
            <td>{new Date(r.fecha).toLocaleDateString()}</td>
            <td>
              {r.imagen_url ? (
                <img
                  src={r.imagen_url}
                  alt="Imagen del reclamo"
                  className={styles.reclamoImagen}
                />
              ) : (
                "Sin imagen"
              )}
            </td>
            <td>{r.estado}</td>
            <td>{r.comentarios}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</section>

  );
};

export default ReclamosVecino;


