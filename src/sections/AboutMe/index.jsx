import ButtonRed from '../../components/ButtonRed';
import styles from './AboutMe.module.css'
import { IoMdDownload } from "react-icons/io";

function AboutMe() {
    return (
        <div className={styles.container} id='aboutMe'>

            <div className={styles.content}>
                <div className={styles.picture}>
                    <img src="/assets/perfil.jpeg" alt="" />
                </div>

                <div className={styles.about}>
                    <h2>Sobre <span>mim</span></h2>
                    <p>Olá, me chamo Allyson Rodrigues Ramalho, sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor Front-end apaixonado por tecnologia. Estou sempre em busca de novos desafios para aprimorar minhas habilidades. Já participei de projetos acadêmicos e freelancers, trabalhando com criação de interfaces, consumo de APIs e boas práticas de desenvolvimento. Meu objetivo é transformar ideias em soluções funcionais e de impacto, atuando no mercado de tecnologia e criando soluções que façam a diferença.</p>
                    <a href="/desenvolvedor-web3.0.pdf" download><ButtonRed text={'Download CV'} icon={<IoMdDownload className={styles.button_icon} />} /></a>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
