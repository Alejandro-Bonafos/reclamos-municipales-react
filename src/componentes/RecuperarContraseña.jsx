import { useState } from 'react';
import axios from 'axios';
import styles from "../../styles/Contraseña.module.css";

function RecuperarContraseña() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/recuperar', { email });
      setMensaje('Revisá tu correo para restablecer la contraseña');
      setError('');
    } catch (err) {
      setError('No se pudo enviar el correo. Verificá el email.');
      setMensaje('');
    }
  };

  return (
   
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Ingresá tu correo"
            />
          </div>
          <button type="submit" className={styles.button}>Enviar enlace</button>
          {mensaje && <div className={styles.successMessage}>{mensaje}</div>}
          {error && <div className={styles.errorMessage}>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default RecuperarContraseña;
