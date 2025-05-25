import styles from './Button.module.css'

function Button({ text, icon, url }) {
    return (
        <div>
            <a href={url} target="_blank"><button className={styles.button}>{text} {icon}</button></a>
        </div>
    )
}

export default Button
