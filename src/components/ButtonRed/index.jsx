import styles from './ButtonRed.module.css'

function ButtonRed({ text, icon }) {
    return (
        <div className={styles.button_red}>
            {text} {icon}
        </div>
    )
}

export default ButtonRed
