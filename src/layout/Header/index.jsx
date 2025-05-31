import { useState } from 'react';
import styles from './Header.module.css'
import { IoMenu } from "react-icons/io5";

function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.header_content}>
                <img className={styles.logo} src="/assets/AWhite.png" alt="logo" />

                <ul>
                    <li onClick={() => scrollToSection('aboutMe')}>Sobre</li>
                    <li onClick={() => scrollToSection('technologies')}>Tecnologias</li>
                    <li onClick={() => scrollToSection('projects')}>Projetos</li>
                    <li onClick={() => scrollToSection('contact')}>Contato</li>
                </ul>

                <button onClick={toggleMenu} className={styles.menu_button}><IoMenu className={styles.menu_icon} /></button>
            </div>

            <div className={`${styles.menu_responsive} ${showMenu ? styles.show : ''}`}>
                <ul className={styles.menu_responsive_list}>
                    <li onClick={() => scrollToSection('aboutMe')}>Sobre</li>
                    <li onClick={() => scrollToSection('technologies')}>Tecnologias</li>
                    <li onClick={() => scrollToSection('projects')}>Projetos</li>
                    <li onClick={() => scrollToSection('contact')}>Contato</li>
                </ul>
            </div>

        </div>
    )
}

export default Header
