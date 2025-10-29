import styles from "../../../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.contactInfo}>
                    <h5>Contacto</h5>
                    <p>
                        <i className="fas fa-atencion"></i>{' '}
                        Lunes a Viernes de 8:00 a 13:00 hs.
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt"></i>{' '}
                        Av. Principal 123, Chaco, Argentina
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i>{' '}
                       atencion@municipalidad.gob.ar
                    </p>
                    <p>
                        <i className="fas fa-phone"></i>{' '}
                        +54 (0362) 444-5555
                    </p>
                </div>


                <div className={styles.social}>
                    <h5>Nuestras redes</h5>
                    <ul className={styles.socialIcons}>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i> Facebook
                            </a>
                        </li>
                    </ul>
                </div>
               <div className={styles.footerEscudo}>
                 <img  src="images/logo.png" width="100" alt="Escudo municipal" />
               </div>
            </div>

            <div className={styles.footerBottom}>
                <p>© 2025 Municipalidad de Resistencia | Desarrollado por: El mejor grupo </p>
            </div>
        </footer>
    );
};

export default Footer;

