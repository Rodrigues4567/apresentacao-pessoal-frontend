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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem praesentium corrupti, accusamus temporibus animi repellat veritatis consectetur ratione recusandae nostrum distinctio, odit molestiae fuga minus nam voluptatibus expedita. Dolore, ipsa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptates illo minima et quidem incidunt eligendi similique molestiae sunt.</p>
                    <a href="/desenvolvedor-web3.0.pdf" download><ButtonRed text={'Download CV'} icon={<IoMdDownload className={styles.button_icon} />} /></a>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
