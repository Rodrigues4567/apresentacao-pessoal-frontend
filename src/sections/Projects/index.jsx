import CardProject from '../../components/CardProject'
import styles from './Projects.module.css'

function Projects() {
    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <h2>Projetos</h2>
            </div>

            <div className={styles.cards}>
                <CardProject img={'/assets/projeto-pokemon.png'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
                urlDeploy={'https://pokemons-page.vercel.app/'} 
                urlRepository={'https://github.com/Rodrigues4567/pokemons-page'} 
                />
                <CardProject img={'/assets/autmobile.jpg'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
                urlDeploy={'https://rodrigues4567.github.io/Autmobile/'}
                urlRepository={'https://github.com/Rodrigues4567/Autmobile'}
                />
                <CardProject />
                <CardProject />
            </div>

        </div>
    )
}

export default Projects
