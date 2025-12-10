import styles from './Contact.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

function Contact() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();

    async function onSubmit(data) {
        try {
            await emailjs.send(
                'service_grb8bfk',
                'template_7v8oo29',
                {
                    user_name: data.user_name,
                    user_email: data.user_email,
                    user_message: data.user_message,
                },
                'yxaFzJ7TC7WmU19ct'
            );

            alert('Mensagem enviada com sucesso!');
            reset(); // limpa o formulário
        }
        catch (err) {
            console.log(err);
            alert('Erro ao enviar. Tente novamente.');
        }
    }

    return (
        <div className={styles.container} id='contact'>

            <div className={styles.title}>
                <h2>Contato</h2>
            </div>

            <div className={styles.content}>

                <div className={styles.accounts}>
                    <div className={styles.account}>
                        <a href="https://github.com/Rodrigues4567" target="_blank" rel="noreferrer">
                            <FaGithub className={styles.icon} />
                        </a>
                        <p>/Rodrigues4567</p>
                    </div>
                    <div className={styles.account}>
                        <a href="https://www.linkedin.com/in/allyson-rodrigues-web/" target="_blank" rel="noreferrer">
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

                <form onSubmit={handleSubmit(onSubmit)} noValidate>

                    {/* NOME */}
                    <input
                        className={styles.input}
                        type="text"
                        id="user_name"
                        placeholder="Seu nome"
                        {...register('user_name', {
                            required: 'O nome é obrigatório.',
                            minLength: {
                                value: 3,
                                message: 'O nome deve ter pelo menos 3 caracteres.'
                            }
                        })}
                    />
                    {errors.user_name && (
                        <span className={styles.error}>{errors.user_name.message}</span>
                    )}

                    {/* EMAIL */}
                    <input
                        className={styles.input}
                        type="email"
                        id="user_email"
                        placeholder="Seu e-mail"
                        {...register('user_email', {
                            required: 'O e-mail é obrigatório.',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Digite um e-mail válido.'
                            }
                        })}
                    />
                    {errors.user_email && (
                        <span className={styles.error}>{errors.user_email.message}</span>
                    )}

                    {/* MENSAGEM */}
                    <textarea
                        className={styles.input}
                        id="user_message"
                        placeholder="Sua mensagem"
                        rows={4}
                        {...register('user_message', {
                            required: 'A mensagem é obrigatória.',
                            minLength: {
                                value: 10,
                                message: 'A mensagem deve ter pelo menos 10 caracteres.'
                            },
                            maxLength: {
                                value: 1000,
                                message: 'A mensagem pode ter no máximo 1000 caracteres.'
                            }
                        })}
                    />
                    {errors.user_message && (
                        <span className={styles.error}>{errors.user_message.message}</span>
                    )}

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar_'}
                    </button>
                </form>

            </div>

        </div>
    );
}

export default Contact;
