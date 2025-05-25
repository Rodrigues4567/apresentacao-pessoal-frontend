import styles from './Header.module.css'
import { IoMenu } from "react-icons/io5";

function Header() {
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

                <button className={styles.menu_button}><IoMenu className={styles.menu_icon} /></button>
            </div>

        </div>
    )
}

export default Header
