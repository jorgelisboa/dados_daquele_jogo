import React, { Dispatch, useEffect, useState } from 'react'
import styles from './toparea.module.css'

export interface TopAreaProps {
    diceQuantity: number,
    dicesResults: number[],
}

export default function TopArea({diceQuantity, dicesResults}: TopAreaProps) {
    
    const [diceAmount, setDiceAmount] = useState<number | null>(null) //Union type

    useEffect(() => {
        if (dicesResults.length != 0) {
            let amount = 0
            dicesResults.forEach(value => {
                amount += value
            })
            setDiceAmount(amount)
        }
    }, [dicesResults])

    return (
        <div className={styles.container}>
            <h1 className={styles.diceAmount}>{diceAmount}</h1>
            <div>
                {dicesResults.map((value, index) => <span key={index} className={styles.dicesList}>{value}, </span>)}
            </div>
        </div>
    )
}