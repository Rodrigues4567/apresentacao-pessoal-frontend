import styles from './Header.module.css'

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
            </div>

        </div>
    )
}

export default Header
