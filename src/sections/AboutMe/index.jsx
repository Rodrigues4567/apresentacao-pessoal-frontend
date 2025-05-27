import Button from '../../components/Button'
import styles from './AboutMe.module.css'

function AboutMe() {
    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <div className={styles.picture}>
                    <img src="/assets/perfil.jpeg" alt="" />
                </div>

                <div className={styles.about}>
                    <h2>Sobre <span>mim</span></h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem praesentium corrupti, accusamus temporibus animi repellat veritatis consectetur ratione recusandae nostrum distinctio, odit molestiae fuga minus nam voluptatibus expedita. Dolore, ipsa.</p>
                    <a href="/desenvolvedor-web3.0.pdf" download><Button text={'Download CV'} /></a>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
