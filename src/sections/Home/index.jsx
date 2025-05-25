import Button from '../../components/Button'
import styles from './Home.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
    return (
        <div className={styles.container}>

            <div className={styles.Home_content}>
                <div className={styles.title}>
                    <h3>Olá, me chamo <span>Allyson Rodrigues</span></h3>
                    <h2>Desenvolvedor Front-End<span>.</span></h2>
                    <div className={styles.linha}></div>
                </div>

                <div className={styles.buttons}>
                    <Button text={'GitHub'} icon={<FaGithub className={styles.button_icon} />} url={'https://github.com/Rodrigues4567'} />
                    <Button text={'Linkedin'} icon={<FaLinkedin className={styles.button_icon} />} url={'https://www.linkedin.com/in/allyson-rodrigues-web/'} />
                </div>
            </div>

        </div>
    )
}

export default Home
