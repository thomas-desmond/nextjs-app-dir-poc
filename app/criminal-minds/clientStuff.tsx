'use client'

import { useState } from 'react';  


export default function ClientStuff() {
    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)

    return (
        <>
            <input onClick={handleClick} checked={checked} type="checkbox" />
        </>
    )
}