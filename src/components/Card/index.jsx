import styles from './Card.module.css'

function Card({ icon, name }) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {icon}
            </div>
            <p>{name}</p>
        </div>
    )
}

export default Card
