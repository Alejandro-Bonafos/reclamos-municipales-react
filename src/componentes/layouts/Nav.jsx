import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../../../styles/Nav.module.css";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedNombre = localStorage.getItem("nombre");
    const storedApellido = localStorage.getItem("apellido");

    if (storedNombre) setNombre(storedNombre);
    if (storedApellido) setApellido(storedApellido);
  }, [location]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    localStorage.clear();
    setIsDropdownOpen(false);
    navigate("/");
  };
  
  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial="hidden"
      animate="visible"
      variants={navAnimation}
    >
      <div className={styles.container}>
        <nav className={styles.navLinks}>
          <ul>
            {!isLoggedIn ? (
              <>
                <li><Link to="/">Inicio</Link></li> 
                <li><Link to="/login">Ingreso</Link></li>
                <li><Link to="/registro">Registro</Link></li>
                <li><Link to="/#funciona">Cómo Funciona</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/logueados">Inicio Logueados</Link></li>
                <li><Link to="/nuevo-reclamo">Nuevo Reclamo</Link></li>
                <li><Link to="/reclamos">Ver Reclamos</Link></li>
              </>
            )}
          </ul>
        </nav>

        {isLoggedIn && (
          <div className={styles.desktopAuth} ref={dropdownRef}>
            <button 
              type="button" 
              className={styles.profileButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className={styles.saludo}>
                ¡Bienvenido, {nombre} {apellido}!
              </span>
              <span className={`${styles.arrow} ${isDropdownOpen ? styles.arrowUp : ''}`}>
                ▼
              </span>
            </button>
            
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <button onClick={handleLogout} className={styles.logout}>
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        )}
        
        <button
          className={`${styles.menuButton} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menú lateral móvil */}
      <nav className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
        <button 
          className={styles.closeButton} 
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      
        <ul>
          {!isLoggedIn ? (
            <>
              <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
              <li><Link to="/login" onClick={() => setIsOpen(false)}>Ingreso</Link></li>
              <li><Link to="/registro" onClick={() => setIsOpen(false)}>Registro</Link></li>
              <li><Link to="/#funciona" onClick={() => setIsOpen(false)}>Cómo Funciona</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/logueados" onClick={() => setIsOpen(false)}>Inicio Logueados</Link></li>
              <li><Link to="/nuevo-reclamo" onClick={() => setIsOpen(false)}>Nuevo Reclamo</Link></li>
              <li><Link to="/reclamos" onClick={() => setIsOpen(false)}>Ver Reclamos</Link></li>
            </>
          )}
        </ul>
        
        {isLoggedIn && (
          <div className={styles.saludoContainer}>
            <span className={styles.saludo}>¡Bienvenido, {nombre} {apellido}!</span>
            <button onClick={handleLogout} className={styles.logout}>
              Cerrar sesión
            </button>
          </div>
        )}
      </nav>
    </motion.header> 
  );
}

export default Navbar;