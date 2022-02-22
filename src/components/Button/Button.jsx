import React from 'react'

import './Button.css'

export default function Button({children, onClick}) {
    return (
        <button className='add-button' onClick={onClick}>
            {children}
        </button>
    )
}