import styles from './Contact.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div className={styles.container} id='contact'>

            <div className={styles.title}>
                <h2>Contato</h2>
            </div>

            <div className={styles.content}>

                <div className={styles.accounts}>
                    <div className={styles.account}>
                        <a href="https://github.com/Rodrigues4567">
                            <FaGithub className={styles.icon} />
                        </a>
                        <p>/Rodrigues4567</p>
                    </div>
                    <div className={styles.account}>
                        <a href="https://www.linkedin.com/in/allyson-rodrigues-web/">
                            <FaLinkedin className={styles.icon} />
                        </a>
                        <p>/allyson-rodrigues-web</p>
                    </div>
                    <div className={styles.account}>
                        <a href="mailto:rodriguesdevv@gmail.com">
                            <MdEmail className={styles.icon} />
                        </a>
                        <p>rodriguesdevv@gmail.com</p>
                    </div>
                </div>

                <form>
                    <input className={styles.input} type="text" id="user_name" placeholder='Seu nome' required />

                    <input className={styles.input} type="email" id="user_email" placeholder='Seu E-mail' required />

                    <textarea className={styles.input} id="user_message" placeholder='Sua mensagem' required ></textarea>

                    <button type="submit">Enviar_</button>
                </form>

            </div>

        </div>
    )
}

export default Contact
