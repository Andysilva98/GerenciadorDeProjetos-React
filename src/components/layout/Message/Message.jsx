import {useEffect, useState} from 'react'
import styles from './Message.module.css'


export default function Message({ type, msg }) {
    
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }       // se não houver msg retorna

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)       // inicia o time

        return () => clearTimeout(timer)    // finaliza o time

    },[msg]) 

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    )
}