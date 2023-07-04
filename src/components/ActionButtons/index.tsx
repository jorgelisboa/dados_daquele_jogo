import styles from './actionbuttons.module.css'

export interface ActionButtonProps {
    text: string, 
    action: () => void,
}

export default function ActionButton({text, action}: ActionButtonProps) {
    return (
        <button className={styles.button} onClick={action}>
            <h1>{text}</h1>
        </button>
    )
}