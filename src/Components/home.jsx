import React, { useContext } from "react";
import styles from "../style.module.css"
import { FaBars } from "react-icons/fa6";
import { AppContext,useGlobalContext } from "../context";
const Home = () => {
    const {OpenSideBar,OpenModal} = useGlobalContext()
    return (
        <main>
           <button className={styles.sidebartoggle} onClick={OpenSideBar}>
              < FaBars />
           </button>
           <button className={styles.btn} onClick={OpenModal}>
            Show Modal
           </button>
        </main>
    )
}
export default Home