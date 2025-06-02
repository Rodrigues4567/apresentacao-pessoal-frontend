import { useRef } from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from 'emailjs-com';

function Contact() {

    const form = useRef()

    function sendEmail(e) {
        e.preventDefault()

        const name = form.current.user_name.value.trim();
        const email = form.current.user_email.value.trim();
        const message = form.current.user_message.value.trim();

        if (!name || !email || !message) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        emailjs.sendForm(
            'service_grb8bfk',
            'template_7v8oo29',
            form.current,
            'yxaFzJ7TC7WmU19ct'
        )
        .then(() => {
            alert('Mensagem enviada com sucesso!')
        },
        (err) => {
            console.log(err.text)
            alert("Erro ao enviar. Tente novamente.")
        })
    }

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

                <form ref={form} onSubmit={sendEmail}>
                    <input className={styles.input} type="text" name='user_name' id="user_name" placeholder='Seu nome' required />

                    <input className={styles.input} type="email" name='user_email' id="user_email" placeholder='Seu E-mail' required />

                    <textarea className={styles.input} name='user_message' id="user_message" placeholder='Sua mensagem' required ></textarea>

                    <button type="submit">Enviar_</button>
                </form>

            </div>

        </div>
    )
}

export default Contact
