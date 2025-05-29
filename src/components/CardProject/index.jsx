import ButtonRed from '../ButtonRed'
import styles from './CardProject.module.css'
import { IoIosRocket } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

function CardProject({ img, text, urlDeploy, urlRepository }) {
    return (
        <div className={styles.container}>

            <div className={styles.card}>
                <img src={img} alt="Projeto" />
                <p>{text}</p>
                <div className={styles.buttons}>
                    <a href={urlDeploy} target='_blank'><ButtonRed text={'Deploy'} icon={<IoIosRocket />} /></a>
                    <a href={urlRepository} target='_blank'><ButtonRed text={'Repositório'} icon={<FaGithub />} /></a>
                </div>
            </div>

        </div>
    )
}

export default CardProject
