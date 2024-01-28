import React from "react";
import { links,social } from "../data";
import styles from "../style.module.css"
import logo from "../logo.svg"
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Sidebar = () => {
    const{isSideBarOpen,CloseSideBar} = useGlobalContext()
     return(
        <aside className={isSideBarOpen ?`${styles.sidebar} ${styles.showsidebar}` : styles.sidebar}>
        <div className={styles.sidebarheader}>
            <img src={logo} className={styles.logo} alt="Coding Addict" /> 
            <button className={styles.closebtn} onClick={CloseSideBar}>
                < FaTimes />
            </button>
        </div>
        <ul className={styles.links}>
        {links.map((link) => {
                const{id,url,text,icon} = link
                return <li key={id} >
                    <a href={url}>{icon}{text}</a>
                </li>
            })}
        </ul>
        <ul className={styles.socialicons}>
        {social.map((socials)=>{
                const {id, icon , url }= socials;
                return <li key={id}>
                    <a href={url}>{icon}</a>
                </li>
            })}
        </ul>
        </aside>
    )
}
export default Sidebar