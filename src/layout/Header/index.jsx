import { useState } from 'react';
import styles from './Header.module.css'
import { IoMenu } from "react-icons/io5";

function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className={styles.container}>

            <div className={styles.header_content}>
                <img className={styles.logo} src="/assets/AWhite.png" alt="logo" />

                <ul>
                    <li>Sobre</li>
                    <li>Tecnologias</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>

                <button onClick={toggleMenu} className={styles.menu_button}><IoMenu className={styles.menu_icon} /></button>
            </div>

            <div className={`${styles.menu_responsive} ${showMenu ? styles.show : ''}`}>
                <ul className={styles.menu_responsive_list}>
                    <li>Sobre</li>
                    <li>Tecnologias</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>

        </div>
    )
}

export default Header
