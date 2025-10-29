import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa'; 
import styles from "../../styles/LoginForm.module.css";

function LoginVecinos() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/vecinos', { email, password });
            console.log("Respuesta completa del backend:", response.data);

            if (response.status === 200) {
                const vecino = response.data.vecino; 
                const id_vecino = vecino?.id;
                const nombre = vecino?.nombre;
                const apellido = vecino?.apellido;

                if (id_vecino !== undefined) {
                    localStorage.setItem("vecino_id", String(id_vecino));
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("email", email);
                    localStorage.setItem("nombre", nombre || "");
                    localStorage.setItem("apellido", apellido || "");
                    console.log("ID guardado:", id_vecino);
                    navigate("/logueados", { state: { email } });
                } else {
                    console.error("ID de vecino no recibido correctamente:", id_vecino);
                    setErrorMessage("Error al obtener el ID del vecino");
                }
            }
        } catch (error) {
            console.error('Error en login:', error);
            setErrorMessage('Usuario y/o Contraseña Incorrectos');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Usuario (correo electrónico)</label>
                        <div className={styles.inputIcon}>
                            <FaUser className={styles.icon} />
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.input}
                                placeholder="Ingresá tu usuario"
                            />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>Contraseña</label>
                        <div className={styles.inputIcon}>
                            <FaLock className={styles.icon} />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.input}
                                placeholder="********"
                            />
                        </div>
                    </div>
                    <button type="submit" className={styles.button}>Iniciar sesión</button>
                    <div className={styles.forgotPassword}>
                        <a href="/recuperar">¿Olvidaste tu contraseña?</a>
                    </div>

                    {errorMessage && (
                        <div className={styles.errorMessage}>
                            {errorMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginVecinos;
