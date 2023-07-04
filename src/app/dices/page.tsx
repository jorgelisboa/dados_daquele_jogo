'use client'

import BottomArea from '@/components/BottomArea'
import TopArea from '@/components/TopArea'
import React, { useState } from 'react'
import styles from './dices.module.css'

function Dices() {

    const [dicesResults, setDicesResult] = useState<number[]>([1, 0, 1, 1])
    const [dicesQuantity, setDicesQuantity] = useState<number>(4)

    return (
        <main className={styles.container}>
            <TopArea
                diceQuantity={dicesQuantity}
                dicesResults={dicesResults}
            />

            <BottomArea 
                setDiceQuantity={setDicesQuantity} 
                setDicesResults={setDicesResult} 
                diceQuantity={dicesQuantity} 
                dicesResults={dicesResults} 
            />
        </main>
    )
}

export default Dices;