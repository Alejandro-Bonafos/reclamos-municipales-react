import styles from "../../styles/Home.module.css";
import AcordeonComoFunciona from "../componentes/AcordeonComoFunciona";
import useScrollToHash from "../hooks/useScrollToHash";
import ListaHorizontal from "../componentes/ListaUtil";
import { motion } from "framer-motion";
import CarouselVecinos from "../componentes/CarouselVecinos"

const Home = () => {
    useScrollToHash(); 

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <main id="home" className={styles.home}>
          <div className={styles.fondoDegradado}></div>
          <div className={styles.contenido}>
            
            
            <motion.section
                className={styles.presentacion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
            >
               <div className={styles.contenedorBienvenida}>

  
  <h1 className={styles.tituloPrincipal}>
    Juntos mejoramos nuestra ciudad.
  </h1>

  <p className={styles.subtituloBienvenida}>
    Desde la Dirección de Voz Ciudadana, trabajamos para canalizar tus necesidades 
    y acercarlas a las áreas correspondientes para su resolución. ¡Estamos para ayudarte!
  </p>

</div>
            </motion.section>

            <motion.section
                className={styles.informacion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
            >
                <h4>Qué podés reclamar?</h4>
                <ListaHorizontal/>
            </motion.section>

            <motion.section
                id="funciona"
                className={styles.funciona}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
            >
                <h4>Información importante que te puede servir</h4>
                <AcordeonComoFunciona/>
            </motion.section>

          </div>
        </main>
    );
};

export default Home;

