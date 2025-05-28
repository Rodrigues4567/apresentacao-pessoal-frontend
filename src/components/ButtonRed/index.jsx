import styles from './ButtonRed.module.css'

function ButtonRed({ url, text, icon }) {
    return (
        <div>
            <a href={url} target="_blank"><button className={styles.button_red}>{text} {icon}</button></a>
        </div>
    )
}

export default ButtonRed
