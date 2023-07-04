import React, { Dispatch, SetStateAction } from 'react'
import styles from './bottomarea.module.css'
import ActionButton from '../ActionButtons'

export interface BottomAreaProps {
    diceQuantity: number,
    dicesResults: number[],
    setDicesResults: Dispatch<SetStateAction<number[]>>,
    setDiceQuantity: Dispatch<SetStateAction<number>>,
}

export default function BottomArea({diceQuantity, dicesResults, setDicesResults, setDiceQuantity} : BottomAreaProps) {

    function subtractDice() {
        if (diceQuantity > 1) {
            setDiceQuantity(diceQuantity-1)            
        }
    }
    function addDice() {
        if (diceQuantity < 16) {
            setDiceQuantity(diceQuantity+1)   
        }
    }
    function rollDices() {
        let arrayResult: number[] = []

        for (let i = 0; i < diceQuantity; i++) {
            const value = Math.random()
            console.log(value.toFixed(2))
            const roundedValue = Math.floor(value * 2)
            console.log(roundedValue)

            arrayResult.push(roundedValue)
        }

        setDicesResults(arrayResult)
    }

    return (
        <div>
            <div className={styles.container}>
                <ActionButton text='-' action={subtractDice} />
                <h1 className={styles.diceQuantity}>{diceQuantity}</h1>
                <ActionButton text='+' action={addDice} />
            </div>
            <div className={styles.container}>
                <button className={styles.button} onClick={rollDices}>Rolar</button>
            </div>
        </div>
    )
}