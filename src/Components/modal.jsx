import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../style.module.css"
import { useGlobalContext } from "../context";
const Modal = () => {
    const {isModalOpen,CloseModal} = useGlobalContext()
    return(
        <div className={isModalOpen ? `${styles.modaloverlay} ${styles.showmodal}`: styles.modaloverlay}>
          <div className={styles.modalcontainer}>
            <h3>modal content</h3>
            <button className={styles.closemodalbtn} onClick={CloseModal}>
                < FaTimes />
            </button>
          </div>
        </div>
    )
}
export default Modal