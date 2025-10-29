import styles from '../../../styles/Header.module.css'; 
import Navbar from "./Nav";
import { motion } from "framer-motion";

const Header = () => {
  const bannerAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } }
  };

    return (
        <header id="hader" className={styles.header}>
            <div> 
                <Navbar/>
            </div>
            <div>
                <motion.section 
                    className={styles.heroBanner}
                    initial="hidden"
                    animate="visible"
                    variants={bannerAnimation}
                >
                </motion.section>   
            </div>
        </header>
    );
};

export default Header;